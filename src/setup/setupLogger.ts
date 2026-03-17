export const setupLogger = () => {
  setupNavigationLogger()
  setupConsoleLogger()
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

      return original.call(this, options)
    }
  })
}

const setupConsoleLogger = () => {
  const realtimeLogger = uni.getRealtimeLogManager()
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
