<template>
  <div class="sect-movie-chart">
    <h4 class="hidden">
      무비차트 - 예매율순
    </h4>
    <ol>
      <li
        v-for="(movie, index) in movie_list"
        :key="index"
      >
        <div class="box-image">
          <strong
            class="rank"
            :class="{top:index < 4}"
          >No.{{ index + 1 }}</strong>
          <router-link :to="{ name: 'MoviesDetail', query:{ movie_id: index } }">
            <span class="thum-image">
              <img
                :src="$getImageUrl(movie.movie_img)"
                :alt="movie.title"
              >
              <span
                class="ico-grade"
                :class="`grade-${movie.audience}`"
              />
            </span>
          </router-link>
          <span
            v-if="movie.special_hall.length > 0"
            class="screentype"
          >
            <a
              v-for="(hall, i) in movie.special_hall"
              :key="i"
              href="#"
              :class="hall"
            >{{ hall }}</a>
          </span>
        </div>
        <div class="box-contents">
          <a href="#none">
            <strong class="title">{{ movie.title }}</strong>
            <div class="score">
              <strong class="percent">
                예매율 <span>{{ movie.reservation_rate }}</span>
              </strong>
              <div class="egg small">
                <span :class="movie.golden_egg" />
                <span class="percent">{{ movie.golden_egg_value }}</span>
              </div>
            </div>
            <span class="txt-info">
              <strong>
                {{ $moment(movie.release_date) }}
                <span v-show="movie.re_opening === true">재개봉</span><span v-show="movie.re_opening === false">개봉</span>
                <em
                  v-if="$d_Days(movie.release_date)"
                  class="dday"
                >D-{{ $d_Days(movie.release_date) }}</em>
              </strong>
            </span>
            <span class="like">
              <a
                href="#none"
                class="link-reservation"
              >예매하기</a>
            </span>
          </a>
        </div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';
import { MovieChartBeScreen } from '@/types/MainInterface'
export default defineComponent({
    props: {
        movie_list: Array as PropType<Array<MovieChartBeScreen>>,
    },
});
</script>

<style scoped lang="scss">
.sect-movie-chart {
    clear: both;
    zoom: 1;
    position: relative;
    overflow: hidden;
    margin-top: 30px;

    > .hidden {
        font: 0/0 a;
        height: 0;
        overflow: hidden;
        position: absolute;
        visibility: hidden;
        width: 0;
        zoom: 1;
        margin-top: 30px;
        color: #222222;
        font-size: 21px;
        font-weight: 500;
    }

    > ol {
        padding-top: 30px;
        margin-left: -64px;
        zoom: 1;

        > li {
            float: left;
            width: 197px;
            margin-left: 64px;
            padding-bottom: 30px;

            > .box-image {
                position: relative;
                width: 197px;
                min-height: 272px;
                margin-bottom: 10px;

                > .rank {
                    display: block;
                    height: 28px;
                    margin-bottom: 4px;
                    background: #333333;
                    color: #ffffff;
                    font-size: 19px;
                    text-align: center;
                    line-height: 28px;

                    &.top {
                        background: #fb4357;
                    }
                }

                > a {
                    display: block;

                    > .thum-image {
                        display: block;
                        position: relative;

                        > img {
                            width: 100%;
                            height: 260px;
                        }

                        > .ico-grade {
                            display: block;
                            position: absolute;
                            left: 5px;
                            top: 5px;
                            width: 21px;
                            height: 21px;
                            background: url(../../assets/icon/sprite_icon.png) no-repeat;
                            font: 0/0 a;
                            zoom: 1;


                            &.grade-all {
                                background-position: -30px 0;
                            }

                            &.grade-12 {
                                background-position: -51px 0;
                            }

                            &.grade-15 {
                                background-position: -72px 0;
                            }

                            &.grade-19 {
                                background-position: -93px 0;
                            }

                        }
                    }
                }

                > .screentype {
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 29px;
                    padding-top: 27px;
                    background: url(../../assets/icon/bg_poster-gradation.png) 0 0 repeat-x;
                    text-align: center;

                    > a {
                        display: inline-block;
                        background: url(../../assets/icon/sprite_screentype_v3.png) no-repeat;
                        font: 0/0 a;
                        zoom: 1;
                        width: 59px;
                        height: 20px;
                        text-align: center;
                        vertical-align: top;

                        &.imax {
                            background-position: 0 -780px;
                        }

                        &.forDX {
                            background-position: 0 -820px;
                        }
                    }
                }
            }

            > .box-contents {
                height: 93px;

                > a {
                    display: block;

                    > .title {
                        display: block;
                        color: #333333;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        font-size: 15px;
                    }

                    > .score {
                        font-size: 11px;
                        margin-top: 7px;

                        > .percent {
                            vertical-align: middle;

                            > span {
                                color: #333333;
                                font-size: 12px;
                                font-weight: normal;
                                font-family: Verdana, Geneva, sans-serif;
                                display: inline-block;
                                margin-left: 10px;
                                vertical-align: initial;
                            }
                        }

                        > .egg {
                            display: inline-block;
                            width: auto !important;
                            line-height: 1;
                            vertical-align: middle;
                            margin-top: -10px;
                            margin-left: 2px;
                            padding-left: 6px;
                            background: url(../../assets/icon/bg_writeinfo.gif) 0 12px no-repeat;

                            > .Preegg {
                                background: url(../../assets/icon/sprite_preegg.png) no-repeat 0 0;
                                background-size: 300px;
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 2px;
                                width: 20px;
                                height: 26px;
                                background-position: 0px 0px;
                            }

                            > .great {
                                display: inline-block;
                                margin-right: 2px;
                                height: 26px;
                                background: url(../../assets/icon/sprite_egg.png) no-repeat 0 -47px;
                                vertical-align: middle;
                                width: 16px;
                                background-position: -41px -47px;
                            }

                            > .good {
                                display: inline-block;
                                margin-right: 2px;
                                height: 26px;
                                background: url(../../assets/icon/sprite_egg.png) no-repeat 0 -47px;
                                vertical-align: middle;
                                width: 13px;
                                background-position: -22px -47px;
                            }

                            > .percent {
                                display: inline-block;
                                margin-top: 8px;
                                font-family: 'verdana';
                                font-size: 12px;
                                color: #000000;
                                vertical-align: middle;
                            }
                        }
                    }

                    > .txt-info {
                        display: block;
                        color: #999999;
                        font-size: 12px;
                        margin-top: 3px;
                        height: 13px;
                        color: #666666;
                        font-weight: 500;
                        white-space: nowrap;

                        > strong {
                            font-size: 11px;

                            > .dday {
                                display: inline-block;
                                margin-left: 5px;
                                color: #fb4357;
                                font-size: 12px;
                                font-family: Verdana, Geneva, sans-serif;
                                font-weight: bold;
                            }
                        }
                    }

                    > .like {
                        display: inline-block;
                        margin-right: 3px;
                        display: block;
                        margin-top: 10px;
                        text-align: left !important;

                        > a {
                            display: inline-block;
                            width: 97px !important;
                            height: 25px !important;
                            background: url(../../assets/icon/sprite_preegg.png) 0 -110px no-repeat !important;
                            font: 0/0 a;
                            zoom: 1;
                            vertical-align: top;
                        }
                    }
                }
            }
        }
    }
}
</style>