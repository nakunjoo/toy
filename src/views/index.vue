<template>
  <div id="container">
    <MovieBanner />
    <MovieList />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import MovieBanner from '@/components/main/MovieBanner.vue';
import MovieList from '@/components/main/MovieList.vue'
export default defineComponent({
	components: {
		MovieBanner,
		MovieList,
	},
	data() {
		return {};
	}
});
</script>

<style scoped lang="scss">
#container {
	position: relative;
    width: 100%;
    z-index: 7;
}
</style>