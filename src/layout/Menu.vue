<script lang="ts" setup>
import { routes } from "../routes";
import { useRoute } from "vue-router";
import MenuIcon from "@/components/MenuIcon.vue";

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
        <el-sub-menu v-if="item.children" :index="item.meta?.title">
          <template #title>
            <MenuIcon :name="item.meta?.icon" />
            <span>{{ item.meta?.title }}</span>
          </template>
          <el-menu-item
            v-for="(subMenu, subIndex) in item.children"
            :key="subIndex"
            :index="subMenu.path"
          >
            <template #title><span style="margin-left: 8px;">{{ subMenu.meta?.title }}</span></template>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path">
          <MenuIcon :name="item.meta?.icon" />
          <template #title>{{ item.meta?.title }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<style>
.menu_wrapper {
  width: 201px;
}
</style>
