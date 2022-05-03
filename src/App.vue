<template>
  <div>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    Footer: defineAsyncComponent(() => import(/* webpackChunkName: "Footer" */ "@/components/utils/Footer.vue"))
  }
}
</script>
<style>
#app {
  background-color: var(--primary-background);
}
</style>
