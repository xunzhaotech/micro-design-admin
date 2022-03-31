<template>
  <div class="micro-main">
    <a-form id="formLogin" class="user-layout-login" ref="formLogin"></a-form>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      bigsize: false,
      form: this.$form,
    };
  },
  methods: {
    sizeClick() {
      this.$data.bigsize = !this.$data.bigsize;
    },
    handleSubmit(e: any) {
      console.log(e);
    },
  },
  computed: {
    mylist(): string[] {
      return this.$store.state.list;
    },
    ...mapState({
      count: (state: any) => state.count,
      list: (state: any) => state.list,
    }),
  },
})
export default class HomeView extends Vue {
  private name = "123";
  private msg = "234";
  // super(name: string, msg: string) {
  //   this.name = name;
  //   this.age = age;
  // }

  public clickFunc(): void {
    console.log(this.name);
    console.log(this.msg);
  }
}
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
