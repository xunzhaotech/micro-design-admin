import type { App } from "vue";
import STable from "@surely-vue/table";
// import { setApp } from "./setupApp/index.ts";
// import { setupPlugin } from "./setupPlugins/setupAntd.ts";
import {
  ConfigProvider,
  Button,
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
} from "ant-design-vue";

export const plugin = (app: App<Element>): void => {
  app.use(ConfigProvider);
  app.use(Button);
  app.use(STable);
  app.use(Form);
  app.use(Modal);
  app.use(Table);
  app.use(Menu);
  app.use(Input);
  app.use(Modal);
  app.use(Card);
  app.use(Checkbox);
  app.use(Radio);
  app.use(Col);
  app.use(Row);
  app.use(Select);
  app.use(DatePicker);
};
