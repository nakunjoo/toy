<template>
  <div id="Header">
    <Header />
  </div>
  <router-view></router-view>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import Header from './components/Header.vue'

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    
  },
})
</script>
