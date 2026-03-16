<template>
  <view class="lazy-observer-root">
    <slot :visible="visible" />
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'

const visible = ref(false)

let observer: UniApp.IntersectionObserver | null = null

const props = withDefaults(
  defineProps<{
    bottom?: number
  }>(),
  {
    bottom: 200
  }
)

onMounted(() => {
  // #ifdef H5
  const instance = getCurrentInstance()

  observer = uni.createIntersectionObserver(instance?.proxy, {
    thresholds: [0]
  })

  // 以当前组件根节点作为观察目标
  observer.relativeToViewport({ bottom: props.bottom }).observe('.lazy-observer-root', (result) => {
    if (result.intersectionRatio > 0) {
      visible.value = true
      // 一旦进入视口就不再继续监听（一次性懒加载）
      observer?.disconnect()
      observer = null
    }
  })
  // #endif
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

// #ifndef H5
visible.value = true
// #endif
</script>

<style scoped></style>
