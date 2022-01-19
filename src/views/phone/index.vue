<template>
  <div
    :class="`phone ${phoneVisble ? 'big' : 'small'}`"
  >
    <KeepAlive>
      <PhoneBig v-if="phoneVisble" @onClose="onClose" :ifInit ="useLocal.ifInit"/>
      <PhoneSmall v-else @onOpen="onOpen" />
    </KeepAlive>
  </div>
</template>

<script lang="ts" setup>
import PhoneBig from "./components/PhoneBig.vue";
import PhoneSmall from "./components/PhoneSmall.vue";
import { useStorage } from '@vueuse/core';
import { ref } from "vue";

const phoneVisble = ref(true); // 手机是否被打开
const useLocal = useStorage('vue-use-local-storage', {
  ifInit: true,
}); // 是否初始化
const onClose = () => {
  phoneVisble.value = false;
  useLocal.value.ifInit = false;
}
const onOpen = () => {
  phoneVisble.value = true;
}
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
