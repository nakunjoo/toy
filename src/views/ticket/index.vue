<template>
  <div id="container">
    <div id="ticket">
      <div class="navi">
        네비
      </div>
      <div class="steps">
        <TicketSelect class="step" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TicketSelect from '@/components/ticket/ticketSelect.vue'
export default defineComponent({
    components: {
        TicketSelect,
    }
})
</script>

<style>

</style>