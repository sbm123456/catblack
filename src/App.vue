<template>
  <NConfigProvider :theme="system.timeName === '晚上' ? darkTheme : undefined" :theme-overrides="themeOverrides" :style="system.timeName === '晚上' ? 'background-color: black;' : 'background-color: rgba(246, 249, 248, 1);'">
    <router-view />
  </NConfigProvider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, NConfigProvider, NElement } from 'naive-ui';
import { useSystemStore } from '@/store';

const system = useSystemStore(); // system数据 这里获取时间数据
// 配置全局变量
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#409eff'
  },
}
</script>
<style></style>
