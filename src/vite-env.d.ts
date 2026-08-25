/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key — powers the contact form. Set in `.env`. */
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
