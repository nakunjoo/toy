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
import { MovieChartBeScreen } from '@/types/MainInterface'
import TitleWrap from '@/components/movies/TitleWrap.vue';
import SectSorting from '@/components/movies/SectSorting.vue';
import MovieChart from '@/components/movies/MovieChart.vue';

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
      movie_list:[
        {
            movie_img: '../assets/movie_img/movie_main_0.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: ['imax'],
            title: '듄',
            golden_egg: 'great',
            golden_egg_value: '92%',
            reservation_rate: '18.7%',
            re_opening: true,
        },
        {
            movie_img: '../assets/movie_img/movie_main_1.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: ['imax', 'forDX'],
            title: '해적-도깨비 깃발',
            golden_egg: 'good',
            golden_egg_value: '80%',
            reservation_rate: '15.5%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_2.jpg',
            audience: 'all',
            release_date: new Date('2022-02-17'),
            special_hall: ['forDX'],
            title: '해리 포터와 불사조 기사단',
            golden_egg: 'Preegg',
            golden_egg_value: '98%',
            reservation_rate: '13.9%',
            re_opening: true,
        },
        {
            movie_img: '../assets/movie_img/movie_main_3.jpg',
            audience: '15',
            release_date: new Date('2022-02-24'),
            special_hall: ['forDX'],
            title: '극장판 주술회전 0',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '11.8%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_4.jpg',
            audience: '12',
            release_date: new Date('2022-02-16'),
            special_hall: ['imax'],
            title: '덩케르크',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '9.4%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_5.jpg',
            audience: '12',
            release_date: new Date('2022-02-20'),
            special_hall: [],
            title: '나일 강의 죽음',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '7.1%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_6.jpg',
            audience: '15',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '킹메이커',
            golden_egg: 'great',
            golden_egg_value: '91%',
            reservation_rate: '6.1%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_7.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '스파이더맨-노 웨이 홈',
            golden_egg: 'great',
            golden_egg_value: '95%',
            reservation_rate: '3.8%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_8.jpg',
            audience: 'all',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '씽2게더',
            golden_egg: 'great',
            golden_egg_value: '98%',
            reservation_rate: '2.3%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_9.jpg',
            audience: '12',
            release_date: new Date('2022-02-17'),
            special_hall: ['imax'],
            title: '비틀즈 겟 백-루프탑 콘서트',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '2.1%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_0.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: ['imax'],
            title: '듄',
            golden_egg: 'great',
            golden_egg_value: '92%',
            reservation_rate: '18.7%',
            re_opening: true,
        },
        {
            movie_img: '../assets/movie_img/movie_main_1.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: ['imax', 'forDX'],
            title: '해적-도깨비 깃발',
            golden_egg: 'good',
            golden_egg_value: '80%',
            reservation_rate: '15.5%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_2.jpg',
            audience: 'all',
            release_date: new Date('2022-02-17'),
            special_hall: ['forDX'],
            title: '해리 포터와 불사조 기사단',
            golden_egg: 'Preegg',
            golden_egg_value: '98%',
            reservation_rate: '13.9%',
            re_opening: true,
        },
        {
            movie_img: '../assets/movie_img/movie_main_3.jpg',
            audience: '15',
            release_date: new Date('2022-02-24'),
            special_hall: ['forDX'],
            title: '극장판 주술회전 0',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '11.8%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_4.jpg',
            audience: '12',
            release_date: new Date('2022-02-16'),
            special_hall: ['imax'],
            title: '덩케르크',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '9.4%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_5.jpg',
            audience: '12',
            release_date: new Date('2022-02-20'),
            special_hall: [],
            title: '나일 강의 죽음',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '7.1%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_6.jpg',
            audience: '15',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '킹메이커',
            golden_egg: 'great',
            golden_egg_value: '91%',
            reservation_rate: '6.1%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_7.jpg',
            audience: '12',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '스파이더맨-노 웨이 홈',
            golden_egg: 'great',
            golden_egg_value: '95%',
            reservation_rate: '3.8%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_8.jpg',
            audience: 'all',
            release_date: new Date('2022-02-09'),
            special_hall: [],
            title: '씽2게더',
            golden_egg: 'great',
            golden_egg_value: '98%',
            reservation_rate: '2.3%',
            re_opening: false,
        },
        {
            movie_img: '../assets/movie_img/movie_main_9.jpg',
            audience: '12',
            release_date: new Date('2022-02-17'),
            special_hall: ['imax'],
            title: '비틀즈 겟 백-루프탑 콘서트',
            golden_egg: 'Preegg',
            golden_egg_value: '99%',
            reservation_rate: '2.1%',
            re_opening: false,
        },
      ] as Array<MovieChartBeScreen>,
    }
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