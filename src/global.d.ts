/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  readonly SENDINBLUE_APIKEY: string
  readonly SENDER_ADDR: string
  readonly SENDER_NAME: string
  readonly RECAPTCHA_SECRET_KEY: string
  readonly VITE_RECAPTCHA_SITE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}