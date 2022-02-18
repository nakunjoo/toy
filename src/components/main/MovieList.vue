<template>
  <div class="movieChartbeScreen_wrap">
    <div class="contents">
      <div class="movieChartBeScreen_btn_wrap">
        <div class="tabBtn_wrap">
          <h3>
            <a
              href="#none"
              :class="{active:list_type === 'movie'}"
              @click="typeChange('movie')"
            >무비차트</a>
          </h3>
          <h3>
            <a
              href="#none"
              :class="{active:list_type === 'bescreen'}"
              @click="typeChange('bescreen')"
            >상영예정작</a>
          </h3>
        </div>
        <router-link
          :to="{ name: 'Movies', query: {
            type: list_type
          } }"
          class="btn_allView"
        >
          전체보기
        </router-link>
      </div>
      <swiper
        :slides-per-view="5"
        :slides-per-group="5"
        :space-between="32"
        navigation
        class="movieChart_list"
      >
        <swiper-slide
          v-for="(chart, index) in swiper_list"
          :key="index"
        >
          <div class="img_wrap">
            <img
              :src="$getImageUrl(chart.movie_img)"
              :alt="chart.title"
            >
            <div class="movieAgeLimit_wrap">
              <img
                :src="$getImageUrl(`../assets/icon/grade-${chart.audience}.png`)"
                :alt="chart.audience"
              >
              <div
                v-if="$d_Days(chart.release_date)"
                class="dDay_wrap"
              >
                <span>{{ $d_Days(chart.release_date) }}</span>
              </div>
            </div>
            <div class="screenType_wrap">
              <i
                v-for="(hall, i) in chart.special_hall"
                :key="i"
                class="screenType"
              >
                <img
                  :src="$getImageUrl(`../assets/icon/${hall}_white.png`)"
                  :alt="hall"
                >
              </i>
            </div>
            <div class="movieChart_btn_wrap">
              <router-link
                :to="{ name: 'MoviesDetail', query:{ movie_id: index } }"
                class="btn_movieChart_detail"
              >
                상세보기
              </router-link>
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
                :src="$getImageUrl(`../assets/icon/eggGoldenegg${chart.golden_egg}.png`)" 
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
import { mapGetters } from 'vuex'
import { MovieChartBeScreen } from '@/types/MainInterface'

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);

type listType = 'movie' | 'bescreen'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      list_type: 'movie' as listType,
      swiper_list: [] as Array<MovieChartBeScreen>,
    }
  },
  computed: {
    ...mapGetters({
      movie_list: 'MovieChart/movie_list',
      bescreen_list: 'MovieChart/bescreen_list'
    })
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      if (this.list_type === 'movie') {
        this.swiper_list = this.movie_list
      } else {
        this.swiper_list = this.bescreen_list
      }
    },
    typeChange(type:listType) {
      this.list_type = type
      this.getList()
    }
  }
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

              &.active {
                font-weight: 700;
                color: #222;
              }
            }
          }
        }

        > .btn_allView {
            padding: 4px 32px 4px 15px;
            font-size: 14px;
            color: #222;
            line-height: 1.429em;
            background: transparent url(../../assets/icon/arrowR_8x13.png) calc(100% - 7px) center/8px 13px scroll no-repeat;
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

              &:hover {
                box-shadow: 6px 10px 20px 0 rgb(0 0 0 / 40%);

                &::before {
                  background-color: rgba(0, 0, 0, 0.5);
                  background-image: none;
                }

                &::after {
                  opacity: 0;
                }

                > .movieAgeLimit_wrap {
                  display: none;
                }

                > .screenType_wrap {
                  display: none;
                }
                
                > .movieChart_btn_wrap {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 3;

                  > a {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    width: 120px;
                    height: 34px;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 1.462em;
                    border-radius: 4px;

                    &~a {
                      margin-top: 6px;
                    }

                    &:hover {
                      opacity: 0.8;
                    }

                    &.btn_movieChart_detail {
                      color: #666;
                      background-color: #fff;
                    }

                    &.btn_movieChart_ticketing {
                      color: #fff;
                      background-color: #fb4357;
                    }
                  }
                }
              }

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