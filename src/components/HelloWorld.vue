<script setup lang="ts">
import { ref } from "vue";

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
