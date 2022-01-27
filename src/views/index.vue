<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
interface Text {
        a: testType,
        b: number,
        c: Array<string>,
    }

type testType = 'test'|'asd';
export default defineComponent({
	data() {
		return {
			text: {
				a: 'asd',
				b: 1234,
				c: [],
			} as Text,
			test: 'test' as string|true,
			color: 'red' as string,
		};
	},
	watch: {
		'text.b'() {
			console.log(this.text.b);
			this.text.c.push(String(this.text.b));
		},
	}
});
</script>

<style>
div {
    color: v-bind(color)
}
</style>