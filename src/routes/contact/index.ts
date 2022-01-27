import SibApiV3Sdk from 'sib-api-v3-sdk'

import type { RequestHandler } from '@sveltejs/kit'
import type { ReadOnlyFormData } from '@sveltejs/kit/types/helper'

// register API key if it exists
if (process.env.SENDINBLUE_APIKEY) {
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_APIKEY
}

const SENDER_ADDR = process.env.SENDER_ADDR
const SENDER_NAME = process.env.SENDER_NAME

const api = new SibApiV3Sdk.TransactionalEmailsApi()

const addr = (email: string, name: string) => ({ email, name })

const htmlContent = `
<html>
  <body>
    <p>Hi, you've received a new website inquiry:</p>
    {% for line in params.bodyMessage %}
      <p>{{line}}</p>
    {% endfor %}
  </body>
</html>`

type RecaptchaResponse = Partial<{
  success: boolean
  challenge_ts: string
  hostname: string
  'error-codes': string[]
  score: number
  action: string
}>

async function handleRecaptcha(body: ReadOnlyFormData): Promise<RecaptchaResponse> {
  // if recaptcha isn't installed, just pretend it's all good
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return {
      success: true,
    }
  }

  const response = body.get('g-recaptcha-response')

  // don't even both hitting google if the form element wasn't submitted
  if (!response) {
    return {
      success: false,
    }
  }

  // verify the recaptcha token sent from the client
  const grc = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      response,
      secret: process.env.RECAPTCHA_SECRET_KEY,
    }),
  })

  return await grc.json()
}


export const post: RequestHandler = async rq => {

  // do nothing if our mailer API key isn't set
  if (!process.env.SENDINBLUE_APIKEY) {
    return {
      status: 201,
    }
  }

  const body = rq.body as ReadOnlyFormData

  // handle the recaptcha
  const gresponse = await handleRecaptcha(body)

  // no success means something has gone wrong at our end, not the user's fault
  if (!gresponse.success) {
    return {
      status: 500,
    }
  }

  // the user-given details are our reply-to
  const replyTo = addr(body.get('email'), body.get('name'))

  // split \n so we can split into <p/> in the email
  const bodyMessage = (body.get('body') || '').split("\n").filter(l => l.trim().length)

  if (bodyMessage.length == 0) {
    // managed to submit empty body somehow
    return {
      status: 400,
    }
  }

  let subject = `New Website Inquiry - ${body.get('name')}`

  // tag the subject line if we suspect spam
  if (gresponse.score < 0.5) {
    subject += '[POSSIBLY SPAM]'
  }

  // send the actual email
  const rs = await api.sendTransacEmail({
    subject,
    sender: addr(SENDER_ADDR, SENDER_NAME),
    replyTo,
    to: [
      addr(SENDER_ADDR, SENDER_NAME)
    ],
    htmlContent,
    params: {
      bodyMessage,
    },
  })

  return {
    body: JSON.stringify(rs),
    status: 301,
    headers: {
      Location: '/contact'
    }
  }
}
