<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <!-- <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul> -->
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
    };
  },
  methods: {
    sizeClick() {
      this.$data.bigsize = !this.$data.bigsize;
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
