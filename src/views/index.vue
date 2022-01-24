<template>
  <div>{{text.a}}</div>
  <div><input type="number" v-model="text.b"></div>
  <div>{{text.c}}</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
interface Text {
        a: string,
        b: number,
        c: Array<string>,
    }
export default defineComponent({
    data() {
        return {
            text: {
                a: 'test',
                b: 1234,
                c: [],
            } as Text
        }
    },
    watch: {
        'text.b'() {
            console.log(this.text.b)
            this.text.c.push(String(this.text.b))
        },
    }
})
</script>

<style>
div {
    color: v-bind(color)
}
</style>