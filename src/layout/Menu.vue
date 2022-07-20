<script lang="ts" setup>
import { routes } from "../routes";
import { useRoute } from "vue-router";
const route = useRoute();
const activePath = route.fullPath;
const menu = routes[1].children;
const handleOpen = () => {};
const handleClose = () => {};
</script>
<template>
  <div class="menu_wrapper">
    <el-menu
      :default-active="activePath"
      mode="vertical"
      router
      @open="handleOpen"
      @close="handleClose"
    >
      <div v-for="(item, index) in menu" :key="index" :index="index">
        <el-sub-menu v-if="item.children" :index="item.meta?.title ">
          <template #title>
            <span>{{ item.meta?.title }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subIndex) in item.children"
            :key="subIndex"
            :index="subMenu.path"
          >
            <template #title>{{ subMenu.meta?.title }}</template>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <template #title>{{ item.meta?.title }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<style>
.menu_wrapper {
  width: 180px;
}
</style>
