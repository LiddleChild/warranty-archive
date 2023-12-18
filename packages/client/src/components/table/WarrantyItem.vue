<script setup lang="ts">
import { LanguageWord } from "../../lang/lang.app";
import { LanguageOption } from "../../models/model.lang";
import { Warranty } from "../../models/model.warranty";
import { getDurationFromNow, getFormattedDate } from "../../utils/util.date";

const { lang, warranty, showModal } = defineProps<{
  lang: LanguageOption;
  warranty: Warranty;
  showModal: (productId?: string) => void;
}>();

const { value: duration, unit: durationUnit } = getDurationFromNow(
  warranty.effectiveDate,
  warranty.duration,
  warranty.durationUnit
);
</script>

<template>
  <tr class="hover:bg-gray-200 border-b border-t border-gray-300">
    <td class="align-top w-1/4 py-2">{{ warranty.name }}</td>
    <td class="align-top py-2">
      {{
        getFormattedDate(warranty.effectiveDate, LanguageWord[lang].dateFormat)
      }}
    </td>
    <td>
      <div
        v-if="duration === 0 && durationUnit === 'day'"
        class="text-green-600"
      >
        {{ LanguageWord[lang].content.expireDate.today }}
      </div>

      <div v-else-if="duration > 0" class="text-green-600">
        {{
          `${LanguageWord[lang].content.expireDate.in} ${duration} ${LanguageWord[lang].content.expireDate.unit[durationUnit]}`
        }}
      </div>

      <div v-else class="text-red-500">
        {{ LanguageWord[lang].content.expireDate.expired }}
      </div>
    </td>
    <td class="align-top break-words min-w-min w-1/2 py-2">
      {{ warranty.note }}
    </td>
    <td>
      <button @click="showModal(warranty.id)">
        <div
          class="material-symbols-outlined text-xl text-gray-700 cursor-pointer select-none rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-400"
        >
          edit
        </div>
      </button>
    </td>
  </tr>
</template>
