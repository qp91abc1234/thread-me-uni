import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const windowInfo = uni.getWindowInfo()
  const capsualInfo = uni.getMenuButtonBoundingClientRect()
  const dpr = windowInfo.pixelRatio

  return {
    windowInfo,
    capsualInfo,
    dpr
  }
})
