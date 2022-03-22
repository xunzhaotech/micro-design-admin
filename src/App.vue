<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
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
  get locale() {
    // 只是为了切换语言时，更新标题
    const { title } = this.$route.meta;
    return title;
    // title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))
    // return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
  }
  //computed 属性
  get fullName() {
    return this.firstName + this.lastName;
  }
  //method
  hello() {
    console.log(`Hello ${this.fullName}!`);
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
