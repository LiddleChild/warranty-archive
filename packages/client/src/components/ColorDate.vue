<script setup lang="ts">
import { getFormattedDate, isPassed } from "../utils/util.date";

const { date } = defineProps<{
  date: string;
}>();
</script>

<template>
  <span v-bind:class="isPassed(date) ? 'text-red-600' : 'text-green-600'">
    {{ getFormattedDate(date) }}
  </span>
</template>
