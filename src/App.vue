<template>
  <router-view />
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
export default class AppView extends Vue {
  // super(firstName: string, lastName: string) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  firstName: string;
  lastName: string;
  // @Prop() option!: String;
  // @Prop() option: Object | undefined | null;
  // @Prop() option?: Object;
  // }
  //初始data
  middleName = "middle";
  //computed 属性
  get fullName() {
    return this.firstName + this.lastName;
  }
  //method
  hello() {
    alert(`Hello ${this.fullName}!`);
  }
  //钩子
  mounted() {
    this.hello();
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #666;
}
</style>
