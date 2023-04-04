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
      movie_list: 'MovieChart/movie_list', //vuex에 설정해둔 영화 목록 더미데이터
    })
  }
})
</script>

<style scoped lang="scss">
#contaniner {
  position: relative;
  width: 100%;
  z-index: 7;

  > .contents {
    clear: both;
    padding-bottom: 50px;
    position: relative;
    width: 980px;
    margin: 0 auto;
  }
}

</style>