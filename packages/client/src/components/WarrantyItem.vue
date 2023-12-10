<script setup lang="ts">
import { Warranty } from "../models/model.warranty";
import { getFormattedDate } from "../utils/util.date";
import { ref } from "vue";

const { warranty } = defineProps<{
  warranty: Warranty;
}>();

let detail = ref(false);

const toggleDetail = () => {
  detail.value = !detail.value;
};
</script>

<template>
  <tr
    v-on:click="toggleDetail()"
    class="hover:bg-gray-300 cursor-pointer select-none"
  >
    <td>{{ warranty.productName }}</td>
    <td>{{ getFormattedDate(warranty.effectiveDate) }}</td>
    <td>{{ getFormattedDate(warranty.expireDate) }}</td>
    <td class="flex justify-center items-end py-2">
      <span class="material-symbols-outlined">chevron_right</span>
    </td>
  </tr>
  <div v-if="detail">detail</div>
</template>
