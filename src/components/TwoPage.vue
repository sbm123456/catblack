<script setup lang="ts"></script>

<template>
  <div class="box first">
    <div class="red"></div>
  </div>

  <div class="box last">
    <div class="blue"></div>
  </div>
</template>

<style scoped lang="scss">
.frist {
  background-color: rgb(85, 204, 240);
}
.last {
  background-color: darkgrey;
}
.box {
  height: 100vh;
  border-bottom: 1px solid rgb(61, 61, 61);
  position: relative;
  clip-path: inset(0 0 0 0);

  .red {
    top: 50px;
    right: 50px;
    position: fixed;
    width: 300px;
    height: 400px;
    background-color: $red-color;
  }
  .blue {
    top: 50px;
    right: 50px;
    position: fixed;
    width: 300px;
    height: 400px;
    background-color: rgb(58, 97, 223);
  }
}
</style>
