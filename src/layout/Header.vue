<script setup lang="ts">
import { useStore } from "../store/index";
const store = useStore();
const handleUpdateToken = () => {
  store.updateToken('')
}
</script>
<template>
  <div class="wrapper">
    <div>logo</div>
    <div>admin {{store.getToken}}</div>
    <el-button @click="handleUpdateToken">更新</el-button>
  </div>
</template>
<style scope lang="scss">
.wrapper {
  border-bottom: 1px solid #eee;
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
