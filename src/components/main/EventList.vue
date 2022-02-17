<template>
  <div class="event_wrap">
    <div class="contents">
      <div class="event_title_wrap">
        <h3>EVENT</h3>
        <a
          href="#none"
          class="btn_allView"
        >전체보기</a>
        <a
          href="#none"
          class="btn_eventControl"
          :class="{active:event_status === 'play'}"
          @click="eventPlayStop"
        >playStop</a>
      </div>
      <div
        class="event_list_wrap"
      >
        <swiper
          ref="event_swiper"
          :slides-per-view="3"
          :slides-per-group="3"
          :space-between="24"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          navigation
          class="event_list"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(event, index) in event_list"
            :key="index"
          >
            <a :href="event.event_url">
              <div class="img_wrap">
                <img
                  :src="$getImageUrl(event.event_img)"
                  :alt="event.title"
                >
              </div>
              <strong>{{ event.title }}</strong>
              <span>{{ $moment(event.start_day) }}~{{ $moment(event.end_day) }}</span>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

import { Swiper, SwiperSlide } from 'swiper/vue';
import '../../assets/css/swiper.min.scss';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { EventList } from '@/types/MainInterface'
SwiperCore.use([Autoplay, Pagination, Navigation]);

type eventStatus = 'play' | 'stop'

export default defineComponent({
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiper: null as any,
            event_status: 'play' as eventStatus,
            event_list: [
                {
                    event_img: '../assets/event_img/event_main_1.jpg',
                    event_url: '#none',
                    title: '신년 맞이! [CGV 2022 챌린지]',
                    start_day: new Date('2022-01-25'),
                    end_day: new Date('2022-02-13'),
                },
                {
                    event_img: '../assets/event_img/event_main_2.jpg',
                    event_url: '#none',
                    title: '[CGV NFT 플레이 포스터] No.1 킹메이커',
                    start_day: new Date('2022-01-19'),
                    end_day: new Date('2022-02-27'),
                },
                {
                    event_img: '../assets/event_img/event_main_3.jpg',
                    event_url: '#none',
                    title: '[킹메이커] 포토플에이 시크릿 컷',
                    start_day: new Date('2022-01-19'),
                    end_day: new Date('2022-02-27'),
                },
                {
                    event_img: '../assets/event_img/event_main_4.jpg',
                    event_url: '#none',
                    title: '[해리포터와 불사조기사단] 4DX 리미디트 포스터',
                    start_day: new Date('2022-01-28'),
                    end_day: new Date('2022-02-28'),
                },
                {
                    event_img: '../assets/event_img/event_main_5.jpg',
                    event_url: '#none',
                    title: '[나일강의 죽음]CGV 필름마크',
                    start_day: new Date('2022-02-03'),
                    end_day: new Date('2022-02-27'),
                },
                {
                    event_img: '../assets/event_img/event_main_6.jpg',
                    event_url: '#none',
                    title: '[킹메이커]CGV 필름마크',
                    start_day: new Date('2022-01-19'),
                    end_day: new Date('2022-02-13'),
                },
                {
                    event_img: '../assets/event_img/event_main_7.jpg',
                    event_url: '#none',
                    title: '[화제의 신메뉴] 시그니처김치시즈닝미스팝콘 런칭!',
                    start_day: new Date('2022-01-25'),
                    end_day: new Date('2022-02-22'),
                },
            ] as Array<EventList>
        }
    },
    methods: {
        eventPlayStop() {
            if (this.event_status === 'play') {
                this.event_status = 'stop'
                this.swiper.autoplay.stop()
            } else {
                this.event_status = 'play'
                this.swiper.autoplay.start()
            }
        },
        onSwiper(swiper:any) {
            this.swiper = swiper
        }
    }
})
</script>

<style scoped lang="scss">
.event_wrap {
    padding: 60px 0 6px;

    > .contents {
        width: 980px;
        margin: 0 auto;
        height: 100%;

        > .event_title_wrap {
            position: relative;
            align-items: center;
            justify-content: space-between;

            > h3 {
                float: left;
                height: auto;
                margin: 0;
                font-weight: 700;
                font-size: 26px;
                color: #222;
                line-height: 1.423em;
                background-image: none;
            }

            > .btn_allView {
                float: right;
                margin-top: 4px;
                padding: 4px 32px 4px 15px;
                font-size: 14px;
                color: #222;
                line-height: 1.429em;
                background: transparent url(../../assets/icon/arrowR_8x13.png) calc(100% - 7px) center/8px 13px scroll no-repeat;
                border: 1px solid #e2e2e2;
                border-radius: 15px;
                box-shadow: 1px 1px 1px 0 rgb(0 0 0 / 5%);
            }

            > .btn_eventControl {
                display: block;
                position: absolute;
                right: 106px;
                top: 4px;
                width: 28px;
                height: 28px;
                font-size: 0;
                background: transparent url(../../assets/icon/play_black.png) 10px center/11px 15px scroll no-repeat;
                border: 1px solid #e3e3e3;
                border-radius: 50%;

                &.active {
                    background: transparent url(../../assets/icon/stop_black.png) 10px center/11px 15px scroll no-repeat;
                }
            }

            &::after {
                content: '';
                clear: both;
                display: block;
                font-size: 0;
                line-height: 0;
            }
        }

        > .event_list_wrap {
            overflow: hidden;
            position: relative;
            width: 100%;
            margin-top: 19px;
            margin-left: -30px;
            padding: 0 30px;

            > .event_list {
                overflow: visible;
                position: relative;

                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: -30px;
                    top: 0;
                    width: 10px;
                    height: 100%;
                    background-color: #fff;
                    z-index: 2;
                }

                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    right: -30px;
                    top: 0;
                    width: 10px;
                    height: 100%;
                    background-color: #fff;
                    z-index: 3
                }

                > .swiper-wrapper {
                    > div {
                        > a {
                            display: block;

                            > .img_wrap {
                                overflow: hidden;
                                width: 310px;
                                height: 207px;
                                border-radius: 10px;
                                position: relative;

                                > img {
                                    position: absolute;
                                    left: 0;
                                    top: 50%;
                                    width: 100%;
                                    height: auto;
                                    transform: translate(0, -50%);
                                }
                            }

                            > strong {
                                display: block;
                                overflow: hidden;
                                margin-top: 16px;
                                font-weight: 500;
                                font-size: 18px;
                                color: #222;
                                line-height: 1.444em;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }

                            > span {
                                display: block;
                                margin-top: 4px;
                                font-size: 14px;
                                color: #666;
                                line-height: 1.429em;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>