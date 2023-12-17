<script setup lang="ts">
import { LanguageOption } from "../models/model.lang";
import { LanguageWord } from "../lang/lang.app";

const { lang } = defineProps<{
  lang: LanguageOption;
}>();

const reload = () => location.reload();
</script>

<template>
  <div
    @click="reload"
    class="text-4xl font-semibold select-none cursor-pointer flex items-center gap-2"
  >
    <span class="w-max">{{ LanguageWord[lang].header.title }}</span>
    <span class="material-symbols-outlined text-yellow-400 text-4xl"
      >folder_open</span
    >
  </div>
</template>
