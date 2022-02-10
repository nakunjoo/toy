<template>
  <div id="container">
    <MovieBanner />
    <MovieList />
    <EventList />
    <SpecialHall />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import MovieBanner from '@/components/main/MovieBanner.vue';
import MovieList from '@/components/main/MovieList.vue'
import EventList from '@/components/main/EventList.vue'
import SpecialHall from '@/components/main/SpecialHall.vue'
export default defineComponent({
	components: {
		MovieBanner,
		MovieList,
		EventList,
		SpecialHall,
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