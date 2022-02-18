<template>
  <div class="tit-heading-wrap">
    <h3>무비차트</h3>
    <div class="submenu">
      <ul>
        <li :class="{on:listType === 'movie'}">
          <router-link
            :to="{ name: 'Movies', query: {
              type: 'movie'
            } }"
          >
            무비차트
          </router-link>
        </li>
        <li :class="{on:listType === 'bescreen'}">
          <router-link
            :to="{ name: 'Movies', query: {
              type: 'bescreen'
            } }"
          >
            상영예정작
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  props: {
    listType: {
      type: String,
      required: true,
    },
  }
});
</script>

<style scoped lang='scss'>
.tit-heading-wrap {
    position: relative;
    height: 60px;
    padding-top: 30px;
    border-bottom: 3px solid #241d1e;

    > h3 {
        display: inline-block;
        position: relative;
        height: inherit;
        margin: 0;
        background-image: none;
        color: #222;
        font-weight: 500;
        font-size: 36px;
        text-align: left;
        vertical-align: middle;
    }

    > .submenu  {
        position: absolute;
        top: 18px;
        right: 0;

        > ul {
            overflow: hidden;

            &::after {
                content: '';
                clear: both;
                display: block;
            }

            > li {
                float: left;
                margin-left: 15px;

                &:first-child {
                    margin-left: 0;
                }

                &.on {
                    > a {
                        background: url(../../assets/icon/ico_arrow07.png) no-repeat 0 3px;
                        color: #fb4357;
                    }
                }

                > a {
                    display: inline-block;
                    padding-left: 13px;
                    font-weight: 500;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>