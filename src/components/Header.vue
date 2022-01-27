<template>
  <div class="header_content">
    <div class="contents">
      <h1>
        <router-link :to="{ name: 'index' }">
          <img
            src="../assets/logoRed.png"
            alt=""
          >
        </router-link>
        <span>CULTUREPLEX</span>
      </h1>
      <ul>
        <li>
          <a>
            <img
              src="../assets/icon/loginPassword.png"
              alt=""
            >
            <span>로그인</span>
          </a>
        </li>
        <li>
          <a>
            <img
              src="../assets/icon/loginJoin.png"
              alt=""
            >
            <span>회원가입</span>
          </a>
        </li>
        <li>
          <a>
            <img
              src="../assets/icon/loginMember.png"
              alt=""
            >
            <span>MY CGV</span>
          </a>
        </li>
        <li>
          <a>
            <img
              src="../assets/icon/loginCustomer.png"
              alt=""
            >
            <span>고객센터</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  
});
</script>

<style scoped lang="scss">
.header_content {
  margin-bottom: 50px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  > .contents {
    display: flex;
    justify-content: space-between;
    padding: 30px 6px 25px 5px;
    background-color: #fff;
    width: 980px;
    margin: 0 auto;

    > h1 {
      display: inline-flex;
      align-items: flex-end;
      height: 53px;

      > a {
        display: block;
        float: left;
        height: 100%;

        img {
          display: block;
          width: auto;
          height: 100%;
          object-fit: contain;
        }
      }

      > span {
        font-weight: 300;
        font-size: 16px;
        color: #222;
        letter-spacing: 0.313em;
        line-height: 1.500em;
      }
    }
    > ul {
      display: flex;
      align-items: center;

      > li {
        margin-left: 44px;
        margin-top: 2px;

        > a {
          display: block;
          position: relative;
          padding-bottom: 19px;

          > img {
            width: 36px;
            height: 36px;
          }

          > span {
            position: absolute;
            bottom: 0;
            left: 50%;
            font-size: 13px;
            color: #666;
            line-height: 1.462em;
            white-space: nowrap;
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }
}
</style>