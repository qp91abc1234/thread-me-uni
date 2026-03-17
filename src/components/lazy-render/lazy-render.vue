<template>
  <view :class="uniqueClass">
    <slot :visible="visible" />
  </view>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'

const instance = getCurrentInstance()

const visible = ref(false)
const uniqueClass = ref(`lazy-observer-${instance?.uid}`)

let observer: UniApp.IntersectionObserver | null = null

const props = withDefaults(
  defineProps<{
    bottom?: number
  }>(),
  {
    bottom: 0
  }
)

onMounted(() => {
  // #ifdef H5
  observer = uni.createIntersectionObserver(instance?.proxy, {
    thresholds: [0.01]
  })

  // 以当前组件根节点作为观察目标
  observer
    .relativeToViewport({ bottom: props.bottom })
    .observe(`.${uniqueClass.value}`, (result) => {
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
