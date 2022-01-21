/// <reference types="@sveltejs/kit" />

interface ImportMetaEnv {
  readonly SENDINBLUE_APIKEY: string
  readonly SENDER_ADDR: string
  readonly SENDER_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}