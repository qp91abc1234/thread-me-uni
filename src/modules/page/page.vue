<script setup lang="ts">
import Tabbar from '@/modules/tabbar/tabbar.vue'
withDefaults(
  defineProps<{
    tabbarIndex?: number
  }>(),
  {
    tabbarIndex: 0
  }
)
</script>

<template>
  <view class="page">
    <slot />
    <Tabbar v-if="typeof tabbarIndex === 'number'" :value="tabbarIndex" />
  </view>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
}
</style>
