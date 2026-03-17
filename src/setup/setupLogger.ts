export const setupLogger = () => {
  setupConsoleLogger()
  setupNavigationLogger()
}

const setupConsoleLogger = () => {
  const realtimeLogger = uni.getRealtimeLogManager ? uni.getRealtimeLogManager() : null
  const methods = ['log', 'info', 'warn', 'error']
  methods.forEach((method) => {
    const original = console[method]
    console[method] = function (...args) {
      original.apply(console, args)
      if (method !== 'log' && realtimeLogger) {
        realtimeLogger[method](args)
      }
    }
  })
}

const setupNavigationLogger = () => {
  const methods = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch', 'navigateBack']

  methods.forEach((method) => {
    const original = uni[method]

    uni[method] = function (options) {
      console.groupCollapsed(`🚀 [uni.${method}]`)
      console.log('url:', options?.url)
      console.trace()
      console.groupEnd()

      const currentPages = getCurrentPages()
      const currentPage = currentPages[currentPages.length - 1]
      console.info(`🚀 [uni.${method}] from: ${currentPage.route}, to: ${options?.url}`)

      return original.call(this, options)
    }
  })
}
