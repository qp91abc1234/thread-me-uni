import { join } from 'path'
import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

function getPlugins() {
  const pluginSwitch = {
    visualizer: false
  }

  return [uni()].concat(
    pluginSwitch.visualizer
      ? [
          visualizer({
            emitFile: true,
            filename: 'stat.html',
            open: true
          })
        ]
      : []
  )
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const plugins = getPlugins()
  return {
    plugins,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/common/scss/mixin.scss' as *;`
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'pinia', 'vue-router', '@dcloudio/uni-h5']
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': join(__dirname, './src')
      }
    },
    server: {
      open: true,
      port: 5173
    }
  }
})
