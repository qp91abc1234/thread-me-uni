import { setupLogger } from '@/setup/setupLogger'
import { setupPinia } from '@/setup/setupPinia'

import type { App } from 'vue'

export const setup = (app: App<Element>) => {
  setupLogger()
  setupPinia(app)
}
