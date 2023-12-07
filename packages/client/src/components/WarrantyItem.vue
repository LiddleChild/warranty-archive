<script setup lang="ts">
import { Warranty } from "../models/model.warranty";
import { getFormattedDate } from "../utils/util.date";

const { warranty } = defineProps<{
  warranty: Warranty;
}>();
</script>

<template>
  <tr class="hover:bg-gray-300 cursor-pointer select-none">
    <td>{{ warranty.productName }}</td>
    <td>{{ getFormattedDate(warranty.effectiveDate) }}</td>
    <td>{{ getFormattedDate(warranty.expireDate) }}</td>
  </tr>
</template>
