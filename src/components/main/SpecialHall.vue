<template>
  <div class="specialHall_wrap">
    <div class="contents">
      <div class="specialHall_title_wrap">
        <h3>특별관</h3>
        <a
          href="#none"
          class="btn_allView"
        >전체보기</a>
      </div>
      <div class="specialHall_content">
        <a
          href="#none"
          class="specialHall_link"
        >
          <div class="img_wrap">
            <img
              :src="$getImageUrl(specialHall.hall_img)"
              alt=""
            >
          </div>
        </a>
        <ul class="specialHall_list">
          <li
            v-for="(hall, index) in specialHall_list"
            :key="index"
            :class="{active:hall_number === index}"
          >
            <a
              href="#none"
              @mouseover="hallChange(index)"
            >
              <strong>{{ hall.name }}</strong>
              <div class="specialHall_hashTag_wrap">
                <span class="specialHall_hashTag">
                  <span
                    v-for="(tag, i) in hall.tag"
                    :key="i"
                  >#{{ tag }}</span>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { SpecialHallList } from '@/types/MainInterface'
export default defineComponent({
    data() {
        return {
            hall_number: 0 as number,
            specialHall_list: [
                {
                    hall_img: '../assets/specialHall_img/specialHall_SUITE_CINEMA.png',
                    name: 'SUITE CINEMA',
                    tag: ['호텔 컨셉의 프리미엄관'],
                },
                {
                    hall_img: '../assets/specialHall_img/specialHall_SKY_BOX.png',
                    name: 'SKY BOX',
                    tag: ['Premium', 'Private'],
                },
                {
                    hall_img: '../assets/specialHall_img/specialHall_4DX.png',
                    name: '4DX',
                    tag: ['모션시트', '오감체험'],
                },
                {
                    hall_img: '../assets/specialHall_img/specialHall_CINE_de_CHEF.png',
                    name: 'CINE de CHEF',
                    tag: ['쉐프가 있는 영화관'],
                }
            ] as Array<SpecialHallList>,
            specialHall: {
                hall_img: '../assets/specialHall_img/specialHall_SUITE_CINEMA.png',
                name: 'SUITE CINEMA',
                tag: ['호텔 컨셉의 프리미엄관'],
            } as SpecialHallList
        }
    },
    methods: {
      // 마우스 오버한곳 위치에따라 특별관 정보 변경
      hallChange(index:number) {
        this.hall_number = index
        this.specialHall = this.specialHall_list[index]
      }
    }
})
</script>

<style scoped lang="scss">
.specialHall_wrap {
    padding: 60px 0 21px;

    > .contents {
        margin: 0 auto;
        width: 980px;
        height: 100%;

        > .specialHall_title_wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > h3 {
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
        }

        > .specialHall_content {
            display: flex;
            justify-content: space-between;
            margin-top: 19px;

            > a {
                display: block;
                overflow: hidden;
                width: 500px;
                border-radius: 10px;

                > .img_wrap {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    overflow: hidden;

                    > img {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        width: 100%;
                        height: auto;
                        transform: translate(0, -50%);
                    }
                }
            }

            > .specialHall_list {
                overflow: hidden;
                width: 440px;

                &::after {
                    content: '';
                    clear: both;
                    display: block;
                }

                > li {
                    border: 1px solid transparent;
                    border-top: 1px solid #e9e9e9;

                    &.active {
                        border-top: 1px solid transparent;
                        border: 1px solid #000;
                        border-radius: 10px;

                        strong {
                            font-weight: 700;
                        }

                        div {
                            > .specialHall_hashTag {
                                font-weight: 400;
                            }
                        }
                    }

                    > a {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 19px 25px 19px 19px;

                        > strong {
                            font-weight: 400;
                            font-size: 18px;
                            color: #222;
                            line-height: 1.444em;
                        }

                        > div {
                            > .specialHall_hashTag {
                                padding: 2px 7px;
                                font-size: 14px;
                                color: #666;
                                line-height: 1.429em;
                                background-color: #f6f6f6;
                                border-radius: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>