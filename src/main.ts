/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import { createApp } from "vue";
import MicroLayout, { PageContainer } from "micro-design-layout";
import "ant-design-vue/dist/antd.css";
import "micro-design-layout/dist/style.css";
import { plugin } from "@/plugins";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/global.less";
import icons from "./icons";
import router from "./router";
import store, { key } from "./store";

const app = createApp(App);
plugin(app);
app.use(router);
app.use(icons);
app.use(store, key);
app.use(MicroLayout);
app.use(PageContainer);
app.mount("#app");
