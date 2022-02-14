<template>
  <div
    class="nav"
    :class="{ 'fixed': nav_fixed === true}"
    @mouseleave="overMenuHide"
  >
    <div class="contents">
      <h1>
        <router-link :to="{ name: 'index' }">
          <img
            src="../assets/logoWhite.png"
            alt=""
          >
        </router-link>
      </h1>
      <ul class="nav_menu">
        <li
          :class="{'active':nav_over_menu === true}"
        >
          <h2 @mouseover="overMenuView">
            <router-link :to="{ name: 'Movies', params:{ type: 'chart' } }">
              영화
            </router-link>
          </h2>
          <dl
            class="nav_overMenu first"
          >
            <dt>
              <h2>
                <router-link :to="{ name: 'Movies', params:{ type: 'chart' } }">
                  영화
                </router-link>
              </h2>
            </dt>
            <dd>
              <h3>
                <router-link :to="{ name: 'Movies', params:{ type: 'chart' } }">
                  무비차트
                </router-link>
              </h3>
            </dd>
            <dd>
              <h3><a href="">아트하우스</a></h3>
            </dd>
          </dl>
        </li>
        <li :class="{'active':nav_over_menu === true}">
          <h2 @mouseover="overMenuView">
            <a href="">극장</a>
          </h2>
          <dl
            class="nav_overMenu"
          >
            <dt>
              <h2><a href="">극장</a></h2>
            </dt>
            <dd>
              <h3><a href="">CGV 극장</a></h3>
            </dd>
            <dd>
              <h3><a href="">특별관</a></h3>
            </dd>
          </dl>
        </li>
        <li :class="{'active':nav_over_menu === true}">
          <h2 @mouseover="overMenuView">
            <a href="">예매</a>
          </h2>
          <dl
            class="nav_overMenu"
          >
            <dt>
              <h2><a href="">예매</a></h2>
            </dt>
            <dd>
              <h3><a href="">빠른예매</a></h3>
            </dd>
            <dd>
              <h3><a href="">상영스케줄</a></h3>
            </dd>
          </dl>
        </li>
        <li :class="{'active':nav_over_menu === true}">
          <h2 @mouseover="overMenuView">
            <a href="">스토어</a>
          </h2>
          <dl
            class="nav_overMenu"
          >
            <dt>
              <h2><a href="">스토어</a></h2>
            </dt>
            <dd>
              <h3><a href="">영화관람권</a></h3>
            </dd>
            <dd>
              <h3><a href="">기프트카드</a></h3>
            </dd>
            <dd>
              <h3><a href="">콤보</a></h3>
            </dd>
            <dd>
              <h3><a href="">팝콘</a></h3>
            </dd>
          </dl>
        </li>
        <li :class="{'active':nav_over_menu === true}">
          <h2 @mouseover="overMenuView">
            <a href="">이벤트</a>
          </h2>
          <dl
            class="nav_overMenu"
            :class="{'active':nav_over_menu === true}"
          >
            <dt>
              <h2><a href="">이벤트</a></h2>
            </dt>
            <dd>
              <h3><a href="">SPECIAL</a></h3>
            </dd>
            <dd>
              <h3><a href="">영화/예매</a></h3>
            </dd>
            <dd>
              <h3><a href="">멤버십/CLUB</a></h3>
            </dd>
            <dd>
              <h3><a href="">CGV 극장별</a></h3>
            </dd>
          </dl>
        </li>
        <li :class="{'active':nav_over_menu === true}">
          <h2 @mouseover="overMenuView">
            <a href="">혜택</a>
          </h2>
          <dl
            class="nav_overMenu"
          >
            <dt>
              <h2><a href="">혜택</a></h2>
            </dt>
            <dd>
              <h3><a href="">CGV 할인정보</a></h3>
            </dd>
            <dd>
              <h3><a href="">CLUB 서비스</a></h3>
            </dd>
            <dd>
              <h3><a href="">VIP라운지</a></h3>
            </dd>
          </dl>
        </li>
      </ul>
      <div class="totalSearch_wrap">
        <label for="totalSearch">
          <input
            id="header_keyword"
            type="text"
          >
        </label>
        <button
          type="button"
          class="btn_totalSearch"
        >
          검색
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  data() {
    return {
      nav_left: 0 as number,
      nav_fixed: false as boolean,
      nav_over_menu: false as boolean,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.detectWindowScrollY)
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.detectWindowScrollY)
  },
  methods: {
    overMenuView() {
      this.nav_over_menu = true
    },
    overMenuHide() {
      this.nav_over_menu = false
    },
    // 스크롤 위치에따라 movebar위치 이동
    detectWindowScrollY() {
      if (window.scrollY > 100) {
        this.nav_fixed = true
      } else {
        this.nav_fixed = false
      }
    },
  }
});
</script>

<style scoped lang="scss">
.nav {
  position: absolute;
  left: 0;
  top: 113px;
  width: 100%;
  padding: 5px 0;
  background-color: #fff;

  &.fixed {
    position: fixed;
    top: 0px;
    min-width: 1040px;
    padding: 10px 0;
    left: 0;

    &::after {
      top: 0;
      bottom: auto;
      height: 60px;
      background-image: linear-gradient(to right, rgb(215, 67, 87), rgb(241,79,58) 59%, rgb(239, 100, 47));
      z-index: 1;
    }

    > .contents {
      z-index: 2;

      > h1 {
        display: block;
        position: absolute;
        left: 0;
        top: 1px;
        width: 70px;
        height: 32px;
        z-index: 3;

        > a {
          display: block;

          > img {
            width: 100%;
            height: 100%;
          }
        }
      }

      > ul {
        > li {

          > h2 {
            > a {
              color: #fff;
            }
          }
          

          &:first-child {
            > h2 {
              left: 120px;
            }
          }

          &:nth-child(2) {
            > h2 {
              left: 200px;
            }
          }

          &:nth-child(3) {
            > h2 {
              left: 280px;
            }
          }

          &:nth-child(4) {
            > h2 {
              left: 360px;
            }
          }

          &:nth-child(5) {
            > h2 {
              left: 455px;
            }
          }

          &:last-child {
            width: 195px;
            > h2 {
              left: 550px;
            }
          }
        }
      }
      > .totalSearch_wrap {
        &::before {
          background-color: #000;
          opacity: 0.2;
        }

        > label {
          > input[type="text"] {
            color: #fff;
            background-color: transparent;
          }
        }

        > .btn_totalSearch {
          background: transparent url(../assets/icon/nav_fixed_search.png) center center/26px scroll no-repeat;
        }
      }
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #a58e8e;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 49px;
    width: 100%;
    height: 1px;
    background-color: #fb4357;
  }

  > .contents {
    position: relative;
    width: 980px;
    margin: 0 auto;

    > h1 {
      display: none;
    }

    > .nav_menu {
      display: inline-flex;

      > li {
        width: 162px;
        padding: 20px 0;
        
        &.active {
          > .nav_overMenu {
          margin-bottom: 8px;
          height: 230px;
          margin-top: 0px;

            > dt {
              padding-top: 18px;
            }
          }
        }

        &:first-child {
          width: 137px;

          > .nav_overMenu {
            padding-left: 0;
          }
        }

        &:nth-child(2) {
          > h2 {
            left: 80px;
          }
        }

        &:nth-child(3) {
          > h2 {
            left: 160px;
          }
        }

        &:nth-child(4) {
          > h2 {
            left: 240px;
          }
        }

        &:nth-child(5) {
          > h2 {
            left: 335px;
          }
        }

        &:last-child {
          width: 195px;
          > h2 {
            left: 430px;
          }
        }

        > h2 {
          position: absolute;
          top: 7px;

          > a {
            font-weight: 500;
            font-size: 16px;
            color: #222;
            line-height: 1.500em;
          }
        }

        > .nav_overMenu {
          display: block;
          position: relative;
          margin-bottom: 0px;
          padding: 0px 0 0 25px;
          overflow: hidden;
          height: 0px;
          transition: 0.3s;
          top: 25px;
          &.first {

            &.active {
              padding: 25px 0 0 0px;
            }

            &::before{
              display: none;
            }
          }

          &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 45px;
            display: block;
            width: 1px;
            height: 170px;
            background-color: #eee;
            opacity: 0.8;
          }

          > dt {
            transition: 0.3s;
            a {
              font-weight: 700;
              font-size: 14px;
              color: #222;
              line-height: 1.429em;
            }
          }

          dt + dd {
            margin-top: 8px;
          }

          > dd {
            a {
              font-weight: 400;
              font-size: 14px;
              color: #666;
              line-height: 2.143em;
            }
          }
          
          h3 {
            height: auto;
            margin: 0;
            line-height: 1em;
            text-align: left;
            background-image: none;
          }
        }
      }
    }

    > .totalSearch_wrap {
      display: inline-flex;
      position: absolute;
      right: 0;
      top: 7px;
      padding: 0 36px 0 10px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 2px;
        width: 1px;
        height: 20px;
        background-color: #cacaca;
      }

      > label {
        display: block;

        input[type="text"] {
          width: 180px;
          height: auto;
          padding: 0 0 0 7px;
          font-size: 16px;
          color: #222;
          line-height: 1.500em;
          border: none;
        }
      }

      > .btn_totalSearch {
        display: block;
        position: absolute;
        right: 10px;
        top: -1px;
        width: 26px;
        height: 26px;
        font-size: 0;
        line-height: 0;
        background: transparent url(./../assets/icon/search.png) center center/26px scroll no-repeat;
      }
    }
  }
}
</style>