// import { setApp } from "./setupApp/index.ts";
// import { setupPlugin } from "./setupPlugins/setupAntd.ts";
import {
  ConfigProvider,
  Button,
  Form,
  FormItem,
  message,
  Modal,
} from "ant-design-vue";
import STable from "@surely-vue/table";
export const plugin = (app: any): void => {
  app.use(ConfigProvider);
  app.use(Button);
  app.use(STable);
  app.use(Form);
  app.use(FormItem);
  app.use(message);
  app.use(Modal);
};
