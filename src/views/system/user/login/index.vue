<template>
  <div class="micro-main">
    <div class="user-layout-login">
      <div class="container" style="background: dodgerblue">212</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// import { message } from "ant-design-vue";
// import {
//   UserOutlined,
//   LockOutlined,
//   SafetyOutlined,
// } from "@ant-design/icons-vue";
// import { useUserStore } from "@/store/modules/user";
import { getImageCaptcha } from "@/api/login";
// import { SvgIcon } from "@/components/basic/svg-icon";
// import { useRoute, useRouter } from "vue-router";

const state = reactive({
  loading: false,
  captcha: "",
  formInline: {
    username: "",
    password: "",
    verifyCode: "",
    captchaId: "",
  },
});

// const route = useRoute();
// const router = useRouter();

// const userStore = useUserStore();

const setCaptcha = async () => {
  const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
  state.captcha = img;
  state.formInline.captchaId = id;
};
setCaptcha();

// const handleSubmit = async () => {
//   const { username, password, verifyCode } = state.formInline;
//   if (username.trim() == "" || password.trim() == "") {
//     return message.warning("用户名或密码不能为空！");
//   }
//   if (!verifyCode) {
//     return message.warning("请输入验证码！");
//   }
//   message.loading("登录中...", 0);
//   state.loading = true;
// params.password = md5(password);
// try {
//   await userStore.login(state.formInline).finally(() => {
//     state.loading = false;
//     message.destroy();
//   });
//   message.success("登录成功！");
//   setTimeout(() => router.replace((route.query.redirect as string) ?? "/"));
// } catch (error: any) {
//   Modal.error({
//     title: () => "提示",
//     content: () => error.message,
//   });
//   setCaptcha();
// }
// };
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
