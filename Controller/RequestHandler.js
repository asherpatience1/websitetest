import SibApiV3Sdk from 'sib-api-v3-sdk';

const htmlContent = `
<html>
  <body>
    <p>Hi, you've received a new website inquiry:</p>
      <p>Full name: {{params.name}}</p>
      <p>Email: {{params.email}}</p>
      <p>Phone number: {{params.phone}}</p>
      <p>Company website: {{params.company}}</p>
      <p>Work Function needed: {{params.workfunction}}</p>
      <p>Number of employees needed: {{params.employees}}</p>
      <p>Short description: {{params.description}}</p>}}
  </body>
</html>`
const api = new SibApiV3Sdk.TransactionalEmailsApi();
const SENDER_ADDR = process.env.SENDER_ADDR
const SENDER_NAME = process.env.SENDER_NAME
async function handleRecaptcha(recaptcha) {
  // if recaptcha isn't installed, just pretend it's all good
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return {
      success: true,
    }
  }

  // don't even both hitting google if the form element wasn't submitted
  if (!recaptcha) {
    return {
      success: false,
    }
  }

  // verify the recaptcha token sent from the client
  const grc = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      recaptcha,
      secret: process.env.RECAPTCHA_SECRET_KEY,
    }),
  })

  return await grc.json()
}
export const RequestHandler = async (req, res) => {

  // register API key if it exists
  if (process.env.SENDINBLUE_APIKEY) {
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_APIKEY
  }
  const body = req.body;


  // do nothing if our mailer API key isn't set
  if (!process.env.SENDINBLUE_APIKEY) {
    return res.status(201);
  }

  // handle the recaptcha
  // const gresponse = await handleRecaptcha(recaptcha)

  // no success means something has gone wrong at our end, not the user's fault
  // if (!gresponse.success) {
  //   return {
  //     status: 500,
  //   }
  // }

  // the user-given details are our reply-to
  const replyTo = { email: body.email, name: body.name }

  // split \n so we can split into <p/> in the email

  if (Object.keys(body).length === 0) {
    // managed to submit empty body somehow
    return res.status(400).end('Name & email is required!');
  }
  let subject = `New Website Inquiry - ${body.name}`

  // tag the subject line if we suspect spam
  // if (gresponse.score < 0.5) {
  //   subject += '[POSSIBLY SPAM]'
  // }

  // send the actual email
  const rs = {
    subject,
    sender: { email: SENDER_ADDR, name: SENDER_NAME },
    replyTo,
    to: [
      { email: 'syedalisma1234@gmail.com', name: SENDER_NAME }
    ],
    htmlContent,
    params: body,
  }
  api.sendTransacEmail(rs).then(function (data) {
    return res.status(200).json({ success: true, message: data });

  }, function (error) {
    return res.status(200).json({ success: false, message: error });

  });
}
