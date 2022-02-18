<template>
  <div id="container">
    <div id="contents">
      <div class="wrap-movie-chart">
        <TitleWrap :list-type="list_type" />
        <SectSorting
          v-if="list_type === 'movie'"
          :now-movies="now_movies"
        />
        <MovieChart :chart-list="chart_list" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TitleWrap from '@/components/movies/TitleWrap.vue';
import SectSorting from '@/components/movies/SectSorting.vue';
import MovieChart from '@/components/movies/MovieChart.vue';
import { MovieChartBeScreen } from '@/types/MainInterface'
import { mapGetters } from 'vuex'

export default defineComponent({
  components: {
    TitleWrap,
    SectSorting,
    MovieChart,
  },
  data() {
    return {
      list_type: '' as any,
      now_movies: false, Boolean,
      chart_list: [] as Array<MovieChartBeScreen>,
    }
  },
  computed: {
    ...mapGetters({
      movie_list: 'MovieChart/movie_list',
      bescreen_list: 'MovieChart/bescreen_list'
    })
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) {
        this.setPage()
        this.getList()
      }
    }
  },
  mounted() {
    this.setPage()
    this.getList()
  },
  
  methods: {
    setPage() {
      if (this.$route.query.now === 'true') {
        this.now_movies = true
      } else {
        this.now_movies = false
      }
      this.list_type = this.$route.query.type
    },
    getList() {
      if (this.list_type === 'movie') {
        if (this.now_movies === true) {
          let now_list:Array<MovieChartBeScreen> = []
          this.movie_list.map((data:MovieChartBeScreen)=>{
            console.log(this.$d_Days(data.release_date))
            if (!this.$d_Days(data.release_date)) {
              now_list.push(data)
            }
            return data
          })
          this.chart_list = now_list
        } else {
          this.chart_list = this.movie_list
        }
        
      } else {
        this.chart_list = this.bescreen_list
      }
    },
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