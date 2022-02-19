/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import "ant-design-vue/dist/antd.css";
import "micro-design-layout/dist/style.css";
import MicroLayout, { PageContainer } from "micro-design-layout";
import { ConfigProvider, Button } from "ant-design-vue";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import icons from "./icons";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(icons);
app.use(store);
app.use(ConfigProvider);
app.use(Button);
app.use(MicroLayout);
app.use(PageContainer);
app.mount("#app");
