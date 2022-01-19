<template>
  <Phone />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Phone from "@/views/phone/index.vue";
import { useSystemStore } from '@/store';

const system = useSystemStore();
let timeId: number | null | undefined;

onMounted(() => {
  timeId = setInterval(() => system.resetNowTime(), 60000);
});
onUnmounted(() => {
  if (timeId) {
    clearInterval(timeId);
  }
});
</script>