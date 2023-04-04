<template>
  <div class="cols-content">
    <div class="col-detail">
      <div class="showtimes-wrap">
        <div class="sect-schedule">
          <div class="slider">
            <div class="item-wrap">
              <ul class="item">
                <li
                  v-for="(date, index) in weekDate"
                  :key="index"
                  :class="{on:$moment(new Date).format('MM-DD') === `${date.month}-${date.week}`}"
                >
                  <div class="day">
                    <a href="#none">
                      <span>{{ date.month }}월</span>
                      <em>{{ $weekDay(date.day) }}</em>
                      <strong>{{ date.week }}</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <button
              type="button"
              class="btn-prev"
              @click="$emit('week-change')"
            >
              이전 날자보기
            </button>
            <button
              type="button"
              class="btn-next"
              @click="weekChange()"
            >
              다음 날자보기
            </button>
          </div>
        </div>
        <div class="sect-showtimes">
          <ul>
            <li
              v-for="(movie, index) in theaterMovies"
              :key="index"
            >
              <div class="col-times">
                <div class="info-movie">
                  <span
                    class="ico-grade"
                    :class="`grade-${movie.info.audience}`"
                  />
                  <a href="#none"><strong>{{ movie.info.title }}</strong></a>
                  <span class="round lightblue">
                    <em>상영중</em>
                  </span>
                  <span class="margin" />
                  <i>
                    <span
                      v-for="genre in movie.info.genre"
                      :key="genre"
                      class="comma"
                    >{{ genre }}<span>, </span></span></i>
                  /
                  <i>{{ movie.info.runing_time }}분</i>
                  /
                  <i>{{ $moment(movie.info.release_date).format('YYYY-MM-DD') }} 개봉</i>
                </div>
                <div
                  v-for="(hall, i) in movie.hall"
                  :key="i"
                  class="type-hall"
                >
                  <div class="info-hall">
                    <ul>
                      <li>{{ hall.screen }}</li>
                      <li>{{ hall.name }}</li>
                      <li>총 {{ hall.seats }}석</li>
                    </ul>
                  </div>
                  <div class="info-timetable">
                    <ul>
                      <li
                        v-for="(time, t) in hall.screenMovie"
                        v-show="movie.info.id === time.movies_id"
                        :key="t"
                      >
                        <a href="#none">
                          <em>{{ time.start_time }}</em>
                          <span class="txt-lightblue">
                            {{ time.reserved_seats }}석
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core';

interface dateType {
  month: string,
  week: string,
  day: number,
}

export default defineComponent({
  props: {
    weekDate: {
      type: Array as PropType<Array<dateType>>,
      required: true,
    },
    theaterMovies: {
      type: Object,
      required: true
    }
  },
  // emit이벤트 선언
  emits: ['week-change'],
  // emit에 변수를 같이 넣어 보낼때
  setup(props, { emit }) {
    const weekChange = () => {
      emit('week-change')
    }
    return {
      weekChange
    }
  },
})
</script>

<style scoped lang="scss">
.cols-content {
  margin-top: 25px;
  padding-top: 25px;

  > .col-detail {
    position: relative;
    width: 100%;

    &:first-child {
      float: left;
    }

    > .showtimes-wrap {
      width: 100%;

      > .sect-schedule {
        width: 100%;
        border-top: 3px solid #241d1e;
        clear: both;
        zoom: 1;

        > .slider {
          width: 100%;
          z-index: 1;
          overflow: visible;
          position: relative;
          height: 48px;
          padding: 12px 0;

          > .item-wrap {
            height: 48px;
            margin: 0 80px;
            overflow: hidden;
            float: left;

            > .item {
              width: 100%;
              height: 108px;
              display: block;
              position: static;
              z-index: 10;
              text-align: center;

              > li {
                float: left;
                margin-left: 2px;

                &.on {
                  > .day {
                    > a {
                      height: 48px;
                      background: #fff url(../../assets/theaters_img/sprite_btn.png) no-repeat -61px -97px;

                      > span {
                        color: #000;
                      }
                      
                      > em {
                        color: #000;
                      }

                      > strong {
                        color: #000;
                      }
                    }
                  }
                }

                > .day {
                  position: relative;
                  width: 115px;
                  height: 48px;
                  color: #717171;

                  > a {
                    height: 48px;
                    display: block;
                    width: 77px;
                    margin: 0 auto;

                    > span {
                      position: absolute;
                      font-weight: 300;
                      font-size: 11px;
                      top: 9px;
                      left: 25px;
                    }

                    > em {
                      position: absolute;
                      font-weight: 300;
                      font-size: 11px;
                      top: 25px;
                      left: 30px;
                    }

                    > strong {
                      position: absolute;
                      font-weight: 300;
                      top: 8px;
                      left: 50px;
                      font-family: verdana, sans-serif;
                      font-size: 32px;
                      line-height: 32px;
                    }
                  }
                }
              }
            }
          }

          > button[type='button'] {
            position: absolute;
            top: 27px;
            width: 54px;
            height: 19px;
            margin: 0;
            font: 0/0 a;
            background-image: url(../../assets/theaters_img/sprite_btn.png);
            background-repeat: no-repeat;
            zoom: 1;
            z-index: 20;
            overflow: hidden;
            text-indent: 100%;
            white-space: nowrap;

            &:focus {
              outline: 3px solid #ead3d7;
            }

            &.btn-prev {
              left: 0px;
              background-position: -117px -174px;
            }

            &.btn-next {
              right: 0px;
              background-position: -117px -155px;
            }
          }
        }
      }

      > .sect-showtimes {
        clear: both;
        zoom: 1;

        > ul {
          > li {
            zoom: 1;
            padding: 40px 0px;
            border-top: 1px solid #474746;

            &:first-child {
              border-top: none;
            }

            > .col-times {
              position: relative;
              margin-left: 14px;
              padding-left: 26px;
              float: left;

              > .info-movie {
                vertical-align: middle;

                > .ico-grade {
                  top: -2px;
                  left: -1px;
                  position: absolute;
                  display: block;
                  width: 21px;
                  height: 21px;
                  background: url(../../assets/icon/sprite_icon.png) no-repeat;

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

                > a {
                  > strong {
                    margin-right: 5px;
                    color: #000;
                    font-size: 16px;
                  }
                }

                > .round {
                  line-height: 16px;
                  vertical-align: top;
                  font-weight: 500;
                  font-size: 12px;
                  text-align: center;
                  display: inline-block;
                  position: relative;

                  &.lightblue {
                    border: 2px solid #3e82a4;
                    color: #3e82a4;
                  }

                  > em {
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding: 0 5px 0;
                    display: inline-block;
                    position: relative;
                  }
                }

                > .margin {
                  margin-left: 5px;
                }

                > i {
                  font-style: normal;

                  > .comma {
                    &:last-child {
                      > span {
                        display: none;
                      }
                    }
                  }
                }
              }

              > .type-hall {
                zoom: 1;
                margin-top: 10px;
                padding-top: 10px;

                > .info-hall {
                  clear: both;
                  margin-bottom: 5px;
                  padding-left: 16px;
                  background: url(../../assets/icon/ico_arrow03.png) no-repeat 2px 50%;

                  > ul {
                    > li {
                      float: left;
                      padding: 0 8px;
                      background: url(../../assets/icon/bg_li_vline.gif) no-repeat 0 50%;
                      color: #333;
                      font-weight: 500;
                      font-size: 11px;
                      line-height: 17px;

                      &:first-child {
                        padding-left: 0;
                        background-image: none;
                      }
                    }

                    &::after {
                      content: '';
                      clear: both;
                      display: block;
                    }
                  }

                  &::after {
                    content: '';
                    clear: both;
                    display: block;
                  }
                }

                > .info-timetable {

                  > ul {
                    > li {
                      float: left;
                      position: relative;
                      width: 70px;
                      height: 36px;
                      margin-right: -1px;
                      padding-top: 5px;
                      border: 1px solid #cbcabe;
                      line-height: 1.4;
                      text-align: center;

                      a {
                        display: block;

                        > em {
                          color: #333;
                        }
                      }

                      em {
                        display: block;
                        font-family: verdana, sans-serif;
                        font-size: 12px;
                        font-weight: bold;
                        color: #888;
                      }

                      span {
                        display: inline-block;
                        font-size: 11px;
                        color: #888;

                        &.txt-lightblue {
                          color: #2275aa !important;
                        }
                      }
                    }

                    &::after {
                      content: '';
                      clear: both;
                      display: block;
                    }
                  }

                  &::after {
                    content: '';
                    clear: both;
                    display: block;
                  }
                }

                &::after {
                  content: '';
                  clear: both;
                  display: block;
                }
              }

              &::after {
                content: '';
                clear: both;
                display: block;
              }
            }
            &::after {
              content: '';
              clear: both;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>