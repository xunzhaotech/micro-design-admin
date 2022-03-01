import { ConfigProvider, Button } from "ant-design-vue";
import STable from "@surely-vue/table";
export const plugin = (app: any): void => {
  app.use(ConfigProvider);
  app.use(Button);
  app.use(STable);
};
