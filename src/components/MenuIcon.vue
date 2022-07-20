<script lang="ts" setup>
const props = defineProps({
  name: String,
});
</script>
<template>
  <el-icon :size="14">
    <Edit v-if="props.name === 'Edit'" />
    <ArrowDownBold v-if="props.name === 'ArrowDownBold'" />
  </el-icon>
</template>
