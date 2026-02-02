import { join } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import { loadEnv, defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

import type { ConfigEnv } from 'vite'

function getPlugins(viteEnv: Env.ImportMeta) {
  const isTrue = (value: string) => value === 'true'

  return [
    uni(),
    isTrue(viteEnv.VITE_VISUALIZER_TOOL) &&
      visualizer({
        emitFile: true,
        filename: 'stat.html',
        open: true
      })
  ]
}

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
  const viteEnv = loadEnv(env.mode, process.cwd()) as unknown as Env.ImportMeta
  const plugins = getPlugins(viteEnv)
  return {
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/common/scss/mixin.scss';`
        }
      }
    },
    resolve: {
      alias: {
        '@': join(__dirname, './src')
      }
    }
  }
})
