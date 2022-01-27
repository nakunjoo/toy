<template>
  <div class="header">
    <Header />
    <Nav />
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import './assets/css/reset.css';
export default defineComponent({
	components: {
		Header,
		Nav,
	},
});
</script>
<style scoped lang="scss">
.header {
  position: relative;
  z-index: 101;
}

</style>
