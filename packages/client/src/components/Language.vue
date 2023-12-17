<script setup lang="ts">
import { LanguageOption } from "../models/model.lang";
import { LanguageWord } from "../lang/lang.app";

const { lang, toggleLanguage } = defineProps<{
  lang: LanguageOption;
  toggleLanguage: () => void;
}>();
</script>

<template>
  <button
    @click="toggleLanguage"
    class="rounded-full w-fit h-11 hover:bg-gray-200 px-2"
  >
    <div class="w-14 flex justify-between items-center gap-1">
      <div
        class="material-symbols-outlined text-gray-400 cursor-pointer select-none"
      >
        language
      </div>
      <span>{{ LanguageWord[lang].languageName }}</span>
    </div>
  </button>
</template>
