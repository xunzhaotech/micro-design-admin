<template>
  <div class="micro-main">
    <a-form id="formLogin" class="user-layout-login" ref="formLogin"></a-form>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Options, Vue } from "vue-class-component";
// import { Watch } from "vue-property-decorator";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
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
  store = useStore();
  router = useRouter();
  message = 110;
  testString = this.store.state.testModule.test;
  private name = "123";
  private msg = "234";
  // super(name: string, msg: string) {
  //   this.name = name;
  //   this.age = age;
  // }
  // @Watch("message", { immediate: true, deep: true })
  add() {
    this.message++;
  }
  less() {
    this.message--;
  }
  mounted() {
    console.log(this.router.getRoutes());
    console.log(this.store);
    console.log(this.store.state);
    console.log(this.store.state.testModule.test);
  }
  public clickFunc(): void {
    console.log(this.name);
    console.log(this.msg);
  }
  // onChangeValue(newVal: number, oldVal: number) {
  //   // todo...
  //   // console.log(newVal);
  //   if (newVal > 110) {
  //     this.store.commit("testModule/updateTestData", newVal);
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
