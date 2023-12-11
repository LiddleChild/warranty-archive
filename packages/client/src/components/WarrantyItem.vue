<script setup lang="ts">
import { Warranty } from "../models/model.warranty";
import { getFormattedDate } from "../utils/util.date";

const { warranty } = defineProps<{
  warranty: Warranty;
}>();
</script>

<template>
  <tr class="hover:bg-gray-300 cursor-pointer select-none">
    <td class="align-top">{{ warranty.productName }}</td>
    <td class="align-top">{{ getFormattedDate(warranty.effectiveDate) }}</td>
    <td class="align-top">{{ getFormattedDate(warranty.expireDate) }}</td>
    <td class="align-top break-words min-w-min w-1/2">{{ warranty.note }}</td>
  </tr>
</template>
