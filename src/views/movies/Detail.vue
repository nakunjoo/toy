<template>
  <div id="contaniner">
    <div class="contents">
      <MovieDetail :movie="movie_list[Number($route.query.movie_id)]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { mapGetters } from 'vuex'
import MovieDetail from '@/components/movies/MovieDetail.vue';
export default defineComponent({
    components: {
        MovieDetail,
    },
    computed: {
    ...mapGetters({
      movie_list: 'MovieChart/movie_list',
    })
  }
})
</script>

<style>

</style>