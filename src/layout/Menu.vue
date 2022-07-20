<script lang="ts" setup>
import { routes } from "../routes";
const activePath = '/page/subpage1'
const menu = routes[0].children;
const handleOpen = () => {};
const handleClose = () => {};
</script>
<template>
  <div class="menu_wrapper">
    <el-menu
      :default-active="activePath"
      mode="vertical"
      router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <div v-for="(item, index) in menu" :key="index" :index="index">
        <el-sub-menu v-if="item.children">
          <template #title>
            <span>{{ item.meta?.title }}</span>
          </template>
          <el-menu-item v-for="(subMenu, subIndex) in item.children" :key="subIndex" :index="subMenu.path">
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
.menu_wrapper{
  width: 180px;
}
</style>
