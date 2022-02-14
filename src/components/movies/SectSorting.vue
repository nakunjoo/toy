<template>
  <div class="sect-sorting">
    <div class="nowshow">
      <input
        id="chk_nowshow"
        type="checkbox"
      >
      <label for="chk_nowshow">현재 상영작만 보기</label>
    </div>
    <label
      for="order_type"
      class="hidden"
    >정렬</label>
    <select
      id="order_type"
      name="order-type"
    >
      <option
        value="현재 선택됨"
        selected
        valus="예매율순"
      >
        예매율순
      </option>
      <option value="평점순">
        평점순
      </option>
      <option value="관람객순">
        관람객순
      </option>
    </select>
    <button
      type="button"
      class="round gray"
    >
      <span>GO</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
    
});
</script>

<style scoped lang="scss">
.sect-sorting {
    clear: both;
    zoom: 1;
    position: relative;
    margin-top: 20px;
    text-align: right;

    &::after {
        content: '';
        clear: both;
        display: block;
    }

    > .nowshow {
        position: absolute;
        left: 0;
        top: 0;
    }

    > .hidden {
        font: 0/0 a;
        height: 0;
        overflow: hidden;
        position: absolute;
        visibility: hidden;
        width: 0;
        zoom: 1;
    }

    > select {
        padding: 3px 5px;

        > option {
            height: 23px;
            line-height: 23px;
        }
    }

    > .round {
        line-height: 23px;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        vertical-align: middle;
        border: 2px solid #7b7b7b;
        color: #7b7b7b;

        > span {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 0 5px 0;
            display: inline-block;
            position: relative;
        }
    }
}
</style>