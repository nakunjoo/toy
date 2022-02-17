<template>
  <div id="container">
    <div id="contents">
      <div class="wrap-movie-chart">
        <TitleWrap :title_type="title_type" />
        <SectSorting />
        <MovieChart :movie_list="movie_list" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TitleWrap from '@/components/movies/TitleWrap.vue';
import SectSorting from '@/components/movies/SectSorting.vue';
import MovieChart from '@/components/movies/MovieChart.vue';
import { mapGetters } from 'vuex'

type TitleType =  'chart'|'will'

export default defineComponent({
  components: {
    TitleWrap,
    SectSorting,
    MovieChart,
  },
  data() {
    return {
      title_type: 'chart' as TitleType,
    }
  },
  computed: {
    ...mapGetters({
      movie_list: 'MovieChart/movie_list',
    })
  }
});
</script>

<style scoped lang="scss">
#container {
  position: relative;
  width: 100%;
  z-index: 7;

  #contents {
    clear: both;
    padding-bottom: 50px;
    position: relative;
    width: 980px;
    margin: 0 auto;
  }
}
</style>