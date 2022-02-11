<template>
  <div class="header">
    <Header />
    <Nav />
  </div>
  <router-view />
  <TopBtn />
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import TopBtn from './components/TopBtn.vue';
import Footer from './components/Footer.vue';
import './assets/css/reset.css';
export default defineComponent({
	components: {
		Header,
		Nav,
    TopBtn,
    Footer,
	},
  
});
</script>
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 101;
}

</style>
