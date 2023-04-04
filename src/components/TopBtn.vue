<template>
  <div
    class="fixedBtn_wrap"
    :class="{topBtn:top_btn === true}"
  >
    <router-link
      class="btn_fixedTicketing"
      :to="{ name: 'Ticket'}"
    >
      예매하기
    </router-link>

    <a
      href="#none"
      class="btn_gotoTop"
      @click="topMove"
    >
      <img
        src="../assets/icon/gotoTop.png"
        alt="최상단으로 이동"
      >
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    data() {
        return {
            top_btn: false as boolean,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.detectWindowScrollY)
    },
    beforeDestory() {
        window.removeEventListener('scroll', this.detectWindowScrollY)
    },
    methods: {
        // 현재 스크롤 위치에따라 보이거나 숨김
        detectWindowScrollY() {
            if (window.scrollY > 100) {
                this.top_btn = true
            } else {
                this.top_btn = false
            }
        },
        // 맨위로 이동 이벤트
        topMove() {
            window.scrollTo({top:0, left:0, behavior:'smooth'})
        }
    }
})
</script>

<style scoped lang="scss">
.fixedBtn_wrap {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    right: 0;
    bottom: 80px;
    min-height: 50px;
    margin-left: 440px;
    text-align: center;
    z-index: 7;

    &.topBtn {

        > .btn_gotoTop {
            opacity:1;
            pointer-events:auto;
            transition:opacity 0.4s;
        }

        > .btn_fixedTicketing {
            right:58px;
            opacity:1;
        }
    }

    > .btn_fixedTicketing {
        position: absolute;
        left: auto;
        right: 0px;
        width: 136px;
        padding: 12px 0 14px;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        line-height: 1.500em;
        background-image: linear-gradient(to left, rgb(255, 115, 86), rgb(251, 67, 87));
        box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
        border-radius: 25px;
        transition: right 0.4s;
        opacity: 0;
    }

    > .btn_gotoTop {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        right: 0;
        width: 48px;
        height: 48px;
        background-color: #fff;
        border: 1px solid #000;
        box-shadow: 1px 3px 6px 0 rgb(0 0 0 / 30%);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;

        > img {
            width: 15px;
            height: 21px;
        }
    }
}
@media only screen and (min-width: 1116px){
    .fixedBtn_wrap {
        right: 50%;
        margin-right: -548px;
    }
}

</style>