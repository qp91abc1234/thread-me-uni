/// <reference types="vite/client" />

declare namespace Env {
  interface ImportMeta extends ImportMetaEnv {}
}

interface ImportMeta {
  readonly env: Env.ImportMeta
}
