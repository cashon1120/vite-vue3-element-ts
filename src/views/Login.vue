<script lang="ts" setup>
import { reactive, ref } from "vue";
import {ElMessage} from "element-plus";
import type { FormInstance } from "element-plus";
import request from "../utils/request";

const ruleFormRef = ref<FormInstance>();
const loading = ref(false);
const validateUserName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [{ validator: validateUserName, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true;
      request
        .post("/user/login", {
          username: ruleForm.username,
          password: ruleForm.password,
        })
        .finally(() => {
          loading.value = false;
          ElMessage.error('登录失败')
        });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
<template>
  <div class="wrapper">
    <h2>登录标题</h2>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="50px"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" type="input" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :loading="loading"
          @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lant="scss">
.wrapper {
  width: 320px;
  margin: auto;
  border: 1px solid #eee;
  padding: 20px 25px 15px 25px;
}
h2 {
  font-size: 18px;
  text-align: center;
  margin: 0;
  padding: 0;
  padding-bottom: 15px;
}
</style>
