/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
/* eslint-disable */
declare module '*.vue' {
  // import type { DefineComponent } from 'vue'
  import type { defineComponent } from 'vue'
  // import { ComponentOptions } from 'vue'
  // const component: ComponentOptions
  // const component: DefineComponent<{}, {}, any>
  // const component: ReturnType<typeof DefineComponent>
  // export default component
  
  // import Vue from 'vue';
  // export default Vue;
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
