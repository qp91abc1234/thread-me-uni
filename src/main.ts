import { createSSRApp } from 'vue'
import App from './App.vue'
import { setup } from './setup'

export function createApp() {
  const app = createSSRApp(App)
  setup(app)
  return {
    app
  }
}
