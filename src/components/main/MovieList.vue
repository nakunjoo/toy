<template>
  <div class="movieChartbeScreen_wrap">
    <div class="contents">
      <div class="movieChartBeScreen_btn_wrap">
        <div class="tabBtn_wrap">
          <h3><a href="#none">무비차트</a></h3>
          <h3><a href="#none">상영예정작</a></h3>
        </div>
        <a
          href="#none"
          class="btn_allView"
        >전체보기</a>
      </div>
      <swiper
        :slides-per-view="5"
        :slides-per-group="5"
        :space-between="32"
        navigation
        class="movieChart_list"
      >
        <swiper-slide
          v-for="(chart, index) in movie_list"
          :key="index"
        >
          <div class="img_wrap">
            <img
              :src="getImageUrl(chart.move_img)"
              :alt="chart.title"
            >
            <div class="movieAgeLimit_wrap">
              <img
                :src="getImageUrl(`../assets/icon/grade-${chart.audience}.png`)"
                :alt="chart.audience"
              >
              <div
                v-if="chart.d_day"
                class="dDay_wrap"
              >
                <span>{{ chart.d_day }}</span>
              </div>
            </div>
            <div class="screenType_wrap">
              <i
                v-for="(hall, i) in chart.special_hall"
                :key="i"
                class="screenType"
              >
                <img
                  :src="getImageUrl(`../assets/icon/${hall}_white.png`)"
                  :alt="hall"
                >
              </i>
            </div>
            <div class="movieChart_btn_wrap">
              <a
                href="#none"
                class="btn_movieChart_detail"
              >상세보기</a>
              <a
                href="#none"
                class="btn_movieChart_ticketing"
              >예매하기</a>
            </div>
          </div>
          <div class="movie_info_wrap">
            <strong class="movieName">{{ chart.title }}</strong>
            <span>
              <img
                :src="getImageUrl(`../assets/icon/eggGoldenegg${chart.golden_egg}.png`)" 
                :alt="chart.golden_egg"
              >{{ chart.golden_egg_value }}
            </span>
            <span>
              예매율 {{ chart.reservation_rate }}
            </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import { Swiper, SwiperSlide } from 'swiper/vue';
import '../../assets/css/swiper.min.scss';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import { MovieChartBeScreen } from '@/types/MainInterface'
import { getImageUrl } from '@/plugins/Global'
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
	data() {
		return {
      getImageUrl: getImageUrl,
      movie_list:[
        {
          move_img: '../assets/movie_img/movie_main_0.jpg',
          audience: '12',
          d_day: 5,
          special_hall: ['imax'],
          title: '듄',
          golden_egg: 'great',
          golden_egg_value: '92%',
          reservation_rate: '18.7%'
        },
        {
          move_img: '../assets/movie_img/movie_main_1.jpg',
          audience: '12',
          d_day: null,
          special_hall: ['imax', 'forDX'],
          title: '해적-도깨비 깃발',
          golden_egg: 'good',
          golden_egg_value: '80%',
          reservation_rate: '15.5%'
        },
        {
          move_img: '../assets/movie_img/movie_main_2.jpg',
          audience: 'all',
          d_day: 5,
          special_hall: ['forDX'],
          title: '해리 포터와 불사조 기사단',
          golden_egg: 'Preegg',
          golden_egg_value: '98%',
          reservation_rate: '13.9%'
        },
        {
          move_img: '../assets/movie_img/movie_main_3.jpg',
          audience: '15',
          d_day: 13,
          special_hall: ['forDX'],
          title: '극장판 주술회전 0',
          golden_egg: 'Preegg',
          golden_egg_value: '99%',
          reservation_rate: '11.8%'
        },
        {
          move_img: '../assets/movie_img/movie_main_4.jpg',
          audience: '12',
          d_day: 5,
          special_hall: ['imax'],
          title: '덩케르크',
          golden_egg: 'Preegg',
          golden_egg_value: '99%',
          reservation_rate: '9.4%'
        },
        {
          move_img: '../assets/movie_img/movie_main_5.jpg',
          audience: '12',
          d_day: 5,
          special_hall: [],
          title: '나일 강의 죽음',
          golden_egg: 'Preegg',
          golden_egg_value: '99%',
          reservation_rate: '7.1%'
        },
        {
          move_img: '../assets/movie_img/movie_main_6.jpg',
          audience: '15',
          d_day: null,
          special_hall: [],
          title: '킹메이커',
          golden_egg: 'great',
          golden_egg_value: '91%',
          reservation_rate: '6.1%'
        },
        {
          move_img: '../assets/movie_img/movie_main_7.jpg',
          audience: '12',
          d_day: null,
          special_hall: [],
          title: '스파이더맨-노 웨이 홈',
          golden_egg: 'great',
          golden_egg_value: '95%',
          reservation_rate: '3.8%'
        },
        {
          move_img: '../assets/movie_img/movie_main_8.jpg',
          audience: 'all',
          d_day: null,
          special_hall: [],
          title: '씽2게더',
          golden_egg: 'great',
          golden_egg_value: '98%',
          reservation_rate: '2.3%'
        },
        {
          move_img: '../assets/movie_img/movie_main_9.jpg',
          audience: '12',
          d_day: 7,
          special_hall: ['imax'],
          title: '비틀즈 겟 백-루프탑 콘서트',
          golden_egg: 'Preegg',
          golden_egg_value: '99%',
          reservation_rate: '2.1%'
        },
      ] as Array<MovieChartBeScreen>,
    };
	},
});
</script>

<style scoped lang="scss">
.movieChartbeScreen_wrap {
    clear: none;
    float: none;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(232, 232, 232, 0.37));

    > .contents {
      width: 980px;
      height: 100%;
      margin: 0 auto;
      overflow: hidden;
      padding: 50px 30px 60px;

      > .movieChartBeScreen_btn_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        > .tabBtn_wrap {
          display: inline-flex;

          > h3 {
            height: auto;
            margin: 0;
            line-height: 1em;
            background-image: none;

            &~h3 {
              position: relative;
              margin-left: 32px;

              &::before {
                content: '';
                display: block;
                position: absolute;
                left: -16px;
                top: 50%;
                width: 1px;
                height: 14px;
                margin-top: -7px;
                background-color: #d8d8d8;
              }
            }

            > a {
              font-weight: 400;
              font-size: 26px;
              color: #666;
              line-height: 1.423em;
            }
          }
        }

        > .btn_allView {
            padding: 4px 32px 4px 15px;
            font-size: 14px;
            color: #222;
            line-height: 1.429em;
            background: transparent url(../assets/icon/arrowR_8x13.png) calc(100% - 7px) center/8px 13px scroll no-repeat;
            border: 1px solid #e2e2e2;
            border-radius: 15px;
            box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 5%);
        }
      }

      > .movieChart_list {
        &.swiper {
          overflow: visible;
          position: relative;
        }

        
        > .swiper-wrapper {
          > div {
            > .img_wrap {
              overflow: hidden;
              position: relative;
              width: 170px;
              height: 234px;
              border-radius: 10px;

              &::before {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09) 35%, rgba(0, 0, 0, 0.85));
                z-index: 2;
              }

              > img {
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                height: auto;
                transform: translate(0, -50%);
              }

              > .movieAgeLimit_wrap {
                position: absolute;
                right: 6px;
                top: 7px;
                z-index: 4;

                > img {
                  width: 22px;
                  height: 22px;
                }

                > .dDay_wrap {
                  display: block;
                  width: 22px;
                  height: 22px;
                  margin-top: 5px;
                  font-weight: 500;
                  background-color: #fff;
                  border-radius: 50%;

                  > span {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    font-weight: 500;
                    font-size: 10px;
                    color: #fb4357;
                    transform: scale(0.9);
                    white-space: nowrap;

                    &::before {
                      content: 'D-'attr(data-count);
                    }
                  }
                }
              }

              > .screenType_wrap {
                position: absolute;
                right: 10px;
                bottom: 10px;
                z-index: 5;

                > .screenType {
                  display: flex;
                  align-items: center;
                  position: relative;
                  width: 34px;
                  height: 10px;
                  border: 1px solid rgba(223, 223, 223, 0.5);
                  border-radius: 3px;

                  > img {
                    width: 35px;
                    height: 7px;
                  }
                }
              }

              > .movieChart_btn_wrap {
                display: none;
              }
            }

            > .movie_info_wrap {
              display: flex;
              flex-wrap: wrap;

              > .movieName {
                display: block;
                flex-basis: 100%;
                overflow: hidden;
                margin-top: 14px;
                font-size: 18px;
                color: #222;
                line-height: 1.167em;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
              }

              > span {
                display: block;
                float: left;
                margin-top: 9px;
                font-size: 14px;
                color: #444;
                line-height: 1.214em;

                &~span {
                  position: relative;
                  padding-left: 16px;

                  &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 6px;
                    top: 50%;
                    width: 1px;
                    height: 10px;
                    margin-top: -5px;
                    background-color: #ededed;
                  }
                }

                >img {
                  width: 16px;
                  height: 16px;
                  vertical-align: top;
                }
              }
            }
          }
        }
      }
    }
}
</style>