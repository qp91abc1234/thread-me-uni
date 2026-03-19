<script setup lang="ts">
withDefaults(
  defineProps<{
    value: number
  }>(),
  {
    value: 0
  }
)

const list = [
  {
    title: '首页',
    icon: 'home',
    value: '/pages/index/index'
  },
  {
    title: '我的',
    icon: 'user',
    value: '/pages/mine/mine'
  }
]

const handleChange = (e: { value: number }) => {
  uni.switchTab({
    url: list[e.value].value
  })
}
</script>

<template>
  <wd-tabbar
    :model-value="value"
    fixed
    shape="round"
    bordered
    safeAreaInsetBottom
    placeholder
    @change="handleChange"
  >
    <wd-tabbar-item
      v-for="item in list"
      :key="item.value"
      :title="item.title"
      :icon="item.icon"
    ></wd-tabbar-item>
  </wd-tabbar>
</template>

<style lang="scss" scoped></style>
