<template>
  <div class="wrap-movie-detail">
    <div class="sect-base-movie">
      <h3>
        <strong>{{ movie.title }}</strong>
      </h3>
      <div class="box-image">
        <a href="#none">
          <span class="thumb-image">
            <img
              :src="movie.movie_img"
              alt=""
            >
            <span
              class="ico-grade"
              :class="`grade-${movie.audience}`"
            />
          </span>
        </a>
      </div>
      <div class="box-contents">
        <div class="title">
          <strong>{{ movie.title }}</strong>
          <em class="round lightblue">
            <span>현재상영중</span>
          </em>
        </div>
        <div class="score">
          <strong class="percent">
            예매율 <span>{{ movie.reservation_rate }}</span>
          </strong>
          <div class="egg small">
            <span :class="movie.golden_egg" />
            <span class="percent">{{ movie.golden_egg_value }}</span>
          </div>
        </div>
        <div class="spec">
          <dl>
            <dt>감독 : </dt>
            <dd>
              <span
                v-for="foreman in movie.foreman"
                :key="foreman"
              >{{ foreman }}</span>
            </dd>
            <dt v-show="movie.produce">
              / 프로튜서 : 
            </dt>
            <dd v-show="movie.produce">
              <span
                v-for="produce in movie.produce"
                :key="produce"
              >{{ produce }}</span>
            </dd>
            <dt> / 배우 : </dt>
            <dd class="on">
              <span
                v-for="actor in movie.actor"
                :key="actor"
              >{{ actor }}</span>
            </dd>
            <dt>
              장르 : 
              <span
                v-for="genre in movie.genre"
                :key="genre"
              >{{ genre }}</span>
            </dt>
            <dd />
            <dt> / 기본 : </dt>
            <dd class="on">
              <span>{{ $movieIsRated(movie.audience) }}, </span><span>{{ movie.runing_time }}분, </span><span
                v-for="country in movie.country"
                :key="country"
              >{{ country }}</span>
            </dd>
            <dt>개봉 : </dt>
            <dd class="on">
              {{ $moment(movie.release_date) }}<span v-show="movie.re_opening === true">(재개봉)</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { MovieChartBeScreen } from '@/types/MainInterface'
export default defineComponent({
    props: {
        movie: {
            type: Object as PropType<MovieChartBeScreen>,
            required: true,
        }
    }
})
</script>

<style>

</style>