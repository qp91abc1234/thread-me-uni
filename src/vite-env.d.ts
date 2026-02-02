/// <reference types="vite/client" />

declare namespace Env {
  interface ImportMeta extends ImportMetaEnv {
    readonly VITE_VISUALIZER_TOOL: string
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta
}
