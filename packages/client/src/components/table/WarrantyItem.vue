<script setup lang="ts">
import { Warranty } from "../../models/model.warranty";
import {
  getExpireDate,
  getFormattedDate,
  isExpire,
} from "../../utils/util.date";

const { warranty, showModal } = defineProps<{
  warranty: Warranty;
  showModal: (productId?: string) => void;
}>();
</script>

<template>
  <tr class="hover:bg-gray-200 border-b border-t border-gray-300">
    <td class="align-top w-1/4 py-2">{{ warranty.name }}</td>
    <td class="align-top py-2">
      {{ getFormattedDate(warranty.effectiveDate) }}
    </td>
    <td
      v-bind:class="`align-top py-2 ${
        isExpire(
          getExpireDate(
            warranty.effectiveDate,
            warranty.duration,
            warranty.durationUnit
          )
        )
          ? 'text-red-500'
          : 'text-green-600'
      }`"
    >
      {{
        getFormattedDate(
          getExpireDate(
            warranty.effectiveDate,
            warranty.duration,
            warranty.durationUnit
          ).toString()
        )
      }}
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
