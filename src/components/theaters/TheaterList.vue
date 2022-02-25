<template>
  <div class="sect-common">
    <div class="favorite-wrap">
      <div class="sect-city">
        <ul>
          <li
            v-for="(area, index) in cgvArea"
            :key="index"
            :class="{ 'on': selectArea === area }"
          >
            <a href="#none">{{ area }}</a>
            <div class="area">
              <ul>
                <li>
                  <a href="#none">강남</a>
                </li>
                <li>
                  <a href="#none">강남</a>
                </li>
                <li>
                  <a href="#none">강남</a>
                </li>
                <li>
                  <a href="#none">강남</a>
                </li>
                <li>
                  <a href="#none">강남</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    props: {
        selectArea: {
            type: String,
            required: true,
        },
        cgvArea: {
            type: Array,
            required: true,
        },
    },
})
</script>

<style scoped lang="scss">
.sect-common {
    clear: both;
    zoom: 1;
    height: 450px;
    margin-top: 25px;
    overflow: hidden;
    width: 980px;

    > .favorite-wrap {
        position: relative;
        width: 874px;
        height: 400px;
        padding: 60px 53px 0;
        background: url(../../assets/theaters_img/bg_showtimes_favorite.gif) no-repeat 0 0;

        > .sect-city {
            height: 42px;
            margin-top: 18px;
            border-top: 2px solid #727171;
            border-bottom: 2px solid #727171;
            clear: both;
            zoom: 1;
            line-height: 44px;

            &::after {
                content: '';
                clear: both;
                display: block;
            }

            > ul {
                position: relative;

                > li {
                    float: left;
                    margin: 0 8px;

                    &.on, 
                    &:hover {
                        > a {
                            color: #fff !important;
                        }
                    }

                    > a {
                        padding: 0 19px;
                        color: #dbdbdb;
                        font-size: 14px;
                        line-height: 42px;
                        text-align: center;
                        display: block;
                        font-weight: 500;
                    }

                    > .area {
                        display: block;
                        position: absolute;
                        top: 50px;
                        left: 10px;
                        width: 854px;

                        > ul {
                            > li {
                                float: left;
                                margin: 6px 25px 0 0;

                                &.on, 
                                &:hover {
                                    > a {
                                        color: #fff !important;
                                    }
                                }

                                &:last-child {
                                    > a {
                                        &::before {
                                            display: none;
                                        }
                                    }
                                }   

                                > a {
                                    position: relative;
                                    padding: 0;
                                    font-size: 12px;
                                    color: #b9b9b9;
                                    line-height: 31px;
                                    text-align: left;
                                    display: block;
                                    font-weight: 500;

                                    &::before {
                                        display: inline-block;
                                        content: '';
                                        width: 1px;
                                        height: 12px;
                                        background: #b9b9b9;
                                        position: absolute;
                                        right: -13px;
                                        top: 50%;
                                        margin-top: -6px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>