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
import axios from 'axios'
export default defineComponent({
	components: {
		MovieBanner,
		MovieList,
		EventList,
		SpecialHall,
	},
	data() {
		return {};
	},
	mounted() {
		// this.getMovies()

	},
	methods: {
		getMovies() {
			console.log('get')
			axios.get('http://172.20.10.5:8080/movies/1').then(res=>{
				console.log(res.data)
			})
		}
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