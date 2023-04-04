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
              :src="$getImageUrl(movie.movie_img)"
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
          <em
            v-if="$d_Days(movie.release_date)"
            class="round brown"
          >
            <span>예매중</span>
          </em>
          <em
            v-if="$d_Days(movie.release_date)"
            class="round red"
          >
            <span>D-{{ $d_Days(movie.release_date) }}</span>
          </em>
          <em
            v-else
            class="round lightblue"
          >
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
            <dt>감독 :&nbsp;</dt>
            <dd>
              <span
                v-for="foreman in movie.foreman"
                :key="foreman"
              >{{ foreman }}</span>
            </dd>
            <dt v-show="movie.produce.length > 1">
              &nbsp;/ 프로듀서 :&nbsp;
            </dt>
            <dd v-show="movie.produce.length > 1">
              <span
                v-for="produce in movie.produce"
                :key="produce"
              >{{ produce }}</span>
            </dd>
            <dt>&nbsp;/ 배우 :&nbsp;</dt>
            <dd class="on">
              <span
                v-for="(actor, i) in movie.actor"
                :key="i"
              >{{ actor }}<span v-if="movie.actor.length > i + 1">&nbsp;,&nbsp;</span>
              </span>
            </dd>
            <dt>
              장르 :&nbsp; 
              <span
                v-for="genre in movie.genre"
                :key="genre"
              >{{ genre }}</span>
            </dt>
            <dd />
            <dt>&nbsp;/ 기본 :&nbsp;</dt>
            <dd class="on">
              <span>{{ $movieIsRated(movie.audience) }}&nbsp;,&nbsp;</span><span>{{ movie.runing_time }}분&nbsp;,&nbsp;</span><span
                v-for="country in movie.country"
                :key="country"
              >&nbsp;{{ country }}</span>
            </dd>
            <dt>개봉 :&nbsp;</dt>
            <dd class="on">
              {{ $moment(movie.release_date).format('YYYY-MM-DD') }}<span v-show="movie.re_opening === true">(재개봉)</span>
            </dd>
          </dl>
        </div>
        <span class="screentype">
          <a
            v-for="hall in movie.special_hall"
            :key="hall"
            href="#none"
            :class="hall"
          />
        </span>
        <span class="like">
          <a
            href="#none"
            class="link-count"
          >
            <i class="sprite_preegg" />
            프리에그
          </a>
          <a
            href="#none"
            class="link-reservation"
          >예매</a>
        </span>
      </div>
    </div>
    <div class="cols-content">
      <div class="col-detail">
        <div class="sect-story-movie">
          {{ movie.detail_content }}
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

<style scoped lang="scss">
.wrap-movie-detail {
  > .sect-base-movie {
    clear: both;
    zoom: 1;
    padding-top: 40px;

    &::after {
      content: '';
      clear: both;
      display: block;
    }

    > h3 {
      font: 0/0 a;
      zoom: 1;
      height: auto;
      margin: 0;
      background: none;
      text-align: left;
    }

    > .box-image {
      margin-right: 30px;
      width: 185px;
      height: 260px;
      float: left;

      > a {
        display: block;

        > .thumb-image {
          display: block;
          position: relative;

          > img {
            width: 185px;
            height: 260px;
          }

          > .ico-posterdetail {
            display: block;
            position: absolute;
            left: 4px;
            bottom: 3px;
            width: 24px;
            height: 24px;
            background: url(../../assets/icon/sprite_icon.png) 0 0 no-repeat;
            font: 0/0 a;
            zoom: 1;
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
    }

    > .box-contents {
      float: left;
      position: relative;
      width: 765px;

      > .title {
        display: block;
        color: #333333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;

        > strong {
          color: #1a1919;
          font-size: 25px;
          vertical-align: middle;
        }

        > em {
          margin-left: 12px;

          &.lightblue {
            border: 2px solid #3e82a4;
            color: #3e82a4;
          }

          &.red {
            border: 2px solid #fb4357;
            color: #fb4357;
          }

          &.brown {
            border: 2px solid #a16423;
            color: #a16423;
          }

          &.round {
            line-height: 23px;
            font-weight: 500;
            font-size: 12px;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            position: relative;

            > * {
              display: inline-block;
              position: relative;
              box-sizing: border-box;
              -moz-box-sizing: border-box;
              width: 100%;
              height: 100%;
              padding: 0 5px 0;
            }
          }
        }
      }

      > .score {
        margin-top: 25px;
        padding-bottom: 10px;
        border-bottom: 1px solid #d9d6c8;
        font-size: 14px;

        > .percent {
          vertical-align: middle;

          > span {
            color: #333333;
            font-size: 12px;
            font-weight: normal;
            font-family: Verdana, Geneva, sans-serif;
            vertical-align: -1px;
          }
        }

        > .egg {
          display: inline-block;
          width: auto !important;
          line-height: 1;
          vertical-align: middle;
          margin-top: -8px;
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

      > .spec {
        color: #333333;
        font-size: 13px;
        font-weight: 500;
        padding-top: 18px;
        line-height: 1.6;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        > dl {

          &::after {
            content: '';
            clear: both;
            display: block;
          }

          > dt {
            float: left;
          }

          > dd {
            white-space: normal;
            text-overflow: clip;
            overflow: visible;
            float: left;

            &.on {
              float: none;
            }
          }
        }
      }

      > .screentype {
        position: absolute;
        right: 0;
        top: 150px;
        display: block;

        > a {
          display: inline-block;
          width: 80px;
          height: 56px;
          background: url(../../assets/icon/sprite_screentype_v3.png) no-repeat;
          font: 0/0 a;
          zoom: 1;
          margin-left: 9px;

          &.imax {
            background-position: 0 0;
          }

          &.forDX {
            background-position: 0 -112px;
          }
        }
      }

      > .like {
        display: inline-block;
        margin-right: 3px;
        margin-top: 22px;

        > .link-count {
          width: 104px;
          height: 33px;
          border: 1px solid #222222;
          line-height: 33px;
          text-align: center;
          display: inline-block;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          margin-right: 2px;
          color: #222222;
          font-size: 14px;
          font-weight: 400;

          > .sprite_preegg {
            background: url(../../assets/icon/sprite_preegg.png) no-repeat 0 0;
            background-size: 300px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 3px;
            width: 18px;
            height: 22px;
            background-position: -30px 0px;
          }
        }
        > .link-reservation {
          display: inline-block;
          width: 91px;
          height: 35px;
          background: url(../../assets/icon/sprite_btn.png) 0 0 no-repeat;
          font: 0/0 a;
          zoom: 1;
          vertical-align: top;
        }
      }
    }
  }

  > .cols-content {
    margin-top: 30px;
    padding-top: 25px;

    > .col-detail {
      position: relative;
      width: 800px;

      > .sect-story-movie {
        clear: both;
        zoom: 1;
        margin-top: 35px;
        color: #333333;
        line-height: 1.8;
        padding-top: 40px;
        white-space: pre-line;
      }
    }
  }
}
</style>