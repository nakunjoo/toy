<template>
  <div class="sect-theater">
    <h4 class="theater-tit">
      <span>{{ theaterInfo.name }}</span>
    </h4>
    <div class="wrap-theaterinfo">
      <div class="box-image">
        <div class="thumb-image">
          <img
            :src="$getImageUrl(theaterInfo.theater_img)"
            alt=""
          >
        </div>
      </div>
      <div class="box-contents">
        <div class="theater-info">
          <strong class="title">{{ theaterInfo.address }} {{ theaterInfo.detail_address }}
            <br>
            {{ theaterInfo.road_address }}
          </strong>
          <span class="txt-info">
            <em>
              {{ theaterInfo.call }}</em>
            <em>
              {{ theaterInfo.show_number }}관 / {{ theaterInfo.total_seats }}석
            </em>
            <span />
          </span>
          <span class="screentype">
            <a
              v-for="(hall, index) in theaterInfo.special_hall"
              :key="index"
              href="#none"
              :class="hall"
            >{{ hall }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
    props: {
        theaterInfo: {
            type: Object,
            required: true
        }
    },
})
</script>

<style scoped lang="scss">
.sect-theater {
    clear: both;
    zoom: 1;
    position: relative;

    > .theater-tit {
        text-align: left;
        padding-bottom: 5px;

        > span {
            color: #333333;
            font-size: 29px;
            font-weight: 500;
            vertical-align: top;
        }
    }

    > .wrap-theaterinfo {
        position: relative;

        &::after {
            content: '';
            clear: both;
            display: block;
        }

        > .box-image {
            width: 980px;
            height: 420px;

            > .thumb-image {
                display: block;
                position: relative;

                > img {
                    width: 980px;
                    height: 420px;
                }
            }
        }

        > .box-contents {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 920px;
            padding: 20px 30px;
            background: url(../../assets/theaters_img/bg_dim80.png) 0 0 repeat;
            color: #fdfcf0;

            > .theater-info {
                position: relative;
                float: left;
                width: 608px;

                > .title {
                    padding-top: 10px;
                    width: 400px;
                    color: #fdfcf0;
                    font-size: 13px;
                    text-overflow: initial;
                    white-space: initial;
                    display: block;
                }

                > .txt-info {
                    float: left;
                    width: 409px;
                    height: 70px;
                    padding-top: 14px;
                    color: #fdfcf0;
                    line-height: 1.6;

                    > em {
                        display: block;
                        width: 100%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }

                    > span {
                        display: block;
                        height: 36px;
                        overflow: hidden;
                    }
                }

                > .screentype {
                    position: absolute;
                    right: 10px;
                    top: 8px;
                    width: 180px;

                    > a {
                        width: 82px;
                        height: 17px;
                        margin: 3px 2px;
                        background: url(../../assets/theaters_img/sprite_screentype02.png) -99px 0 no-repeat;
                        vertical-align: top;
                        font: 0/0 a;
                        zoom: 1;
                        display: inline-block;

                        &.sweetbox {
                            background-position: -99px -108px
                        }

                        &.screenX {
                            background-position: -99px -162px;
                        }
                    }
                }
            }
        }
    }
}
</style>