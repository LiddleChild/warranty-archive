<script setup lang="ts">
import { LanguageOption } from "../models/model.lang";
import { LanguageWord } from "../lang/lang.app";

const { lang, onClick } = defineProps<{
  lang: LanguageOption;
  onClick: () => void;
}>();
</script>

<template>
  <button
    @click="onClick"
    class="bg-white rounded-full h-11 hover:bg-gray-200 focus:outline-none"
  >
    <div class="flex items-center gap-1 p-2">
      <div
        class="material-symbols-outlined text-gray-400 cursor-pointer select-none"
      >
        add
      </div>
      <span>{{ LanguageWord[lang].header.addButton }}</span>
    </div>
  </button>
</template>
