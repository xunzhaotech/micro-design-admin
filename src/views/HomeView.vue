<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      bigsize: false,
    };
  },
  methods: {
    sizeClick() {
      this.$data.bigsize = !this.$data.bigsize;
    },
  },
  computed: {},
})
export default class HomeView extends Vue {
  private name = 0;
  private msg = 0;

  public clickFunc(): void {
    console.log(this.name);
    console.log(this.msg);
  }
}
</script>
