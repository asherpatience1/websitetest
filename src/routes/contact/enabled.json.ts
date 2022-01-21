import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler = () => {
  return {
    body: JSON.stringify(!!process.env.SENDINBLUE_APIKEY),
  }
}
