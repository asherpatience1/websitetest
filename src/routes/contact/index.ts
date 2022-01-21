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


export const post: RequestHandler = async rq => {

  // do nothing if our mailer API key isn't set
  if (!process.env.SENDINBLUE_APIKEY) {
    return {
      status: 201,
    }
  }

  const body = rq.body as ReadOnlyFormData

  // the user-given details are our reply-to
  const replyTo = addr(body.get('email'), body.get('name'))

  const bodyMessage = body.get('body').split("\n").filter(l => l.trim().length)

  const rs = await api.sendTransacEmail({
    subject: `New Website Inquiry - ${body.get('name')}`,
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
