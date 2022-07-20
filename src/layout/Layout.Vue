<script lang="ts" setup>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <Header />
  <div class="container">
    <Menu />
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  flex: 1;
  display: flex;
}
.view {
  flex: 1;
  padding-left: 15px;
}
</style>
