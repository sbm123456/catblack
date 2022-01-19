<script lang="ts" setup>
import { NButton } from "naive-ui";
import SvgNotFound from "@/components/svg/SvgNotFound.vue";
</script>

<template>
  <div class="flex-col-center wh-100wh">
    <div
      style="width: 400px; height: 400px; margin-bottom: 10px"
      class="text-primary"
    >
      <SvgNotFound />
    </div>
    <router-link to="/">
      <NButton type="info">回到首页</NButton>
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
