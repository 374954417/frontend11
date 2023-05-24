<template>
    <div class="change-password">
      <el-form ref="changePasswordForm" :model="changePasswordForm" label-width="100px" size="small">
        <el-form-item label="旧密码" prop="oldPassword">
          <el-input v-model="changePasswordForm.oldPassword" show-password></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="changePasswordForm.newPassword" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="changePasswordForm.confirmPassword" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changePassword" :loading="isChangingPassword">确认修改</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { ElMessage } from 'element-plus'; // 导入消息提示组件
  
  export default {
    data() {
      return {
        changePasswordForm: {
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        },
        isChangingPassword: false // 添加一个变量来控制按钮加载状态
      };
    },
    methods: {
      async changePassword() {
        if (this.$refs.changePasswordForm.validate()) {
          try {
            this.isChangingPassword = true; // 开始加载状态
            // 模拟异步请求修改密码，实际应用中请替换为实际的异步请求
            await this.simulateChangePassword();
            this.resetForm(); // 修改成功后重置表单
            ElMessage.success('密码修改成功');
          } catch (error) {
            ElMessage.error('密码修改失败，请重试');
          } finally {
            this.isChangingPassword = false; // 结束加载状态
          }
        }
      },
      resetForm() {
        this.$refs.changePasswordForm.resetFields();
      },
      simulateChangePassword() {
        return new Promise((resolve, reject) => {
          // 模拟异步请求
          setTimeout(() => {
            // 在实际应用中，此处应该是发送请求到后端进行密码修改操作
            const { newPassword, confirmPassword } = this.changePasswordForm;
            if (newPassword !== confirmPassword) {
              reject(new Error('新密码和确认密码不一致'));
            } else {
              resolve();
            }
          }, 1500);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .change-password {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>
  