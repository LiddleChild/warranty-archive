<script setup lang="ts">
import { Warranty } from "../../models/model.warranty";
import { getFormattedDate } from "../../utils/util.date";
import ColorDate from "../ColorDate.vue";

const { warranty, showModal } = defineProps<{
  warranty: Warranty;
  showModal: (productId?: string) => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 border-b border-t border-gray-300">
    <td class="align-top w-1/4 py-2">{{ warranty.productName }}</td>
    <td class="align-top py-2">
      {{ getFormattedDate(warranty.effectiveDate) }}
    </td>
    <td class="align-top py-2">
      <ColorDate :date="warranty.expireDate" />
    </td>
    <td class="align-top break-words min-w-min w-1/2 py-2">
      {{ warranty.note }}
    </td>
    <td>
      <button @click="showModal(warranty.productId)">
        <div
          class="material-symbols-outlined text-xl text-gray-700 cursor-pointer select-none rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-400"
        >
          edit
        </div>
      </button>
    </td>
  </tr>
</template>
