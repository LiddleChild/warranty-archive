<script setup lang="ts">
import { ref } from "vue";

import { LanguageOption } from "../models/model.lang";
import { LanguageWord } from "../lang/lang.app";

const { lang, setSearchValue } = defineProps<{
  lang: LanguageOption;
  setSearchValue: (value: string) => void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);
const focusState = ref<boolean>(false);

const focusSearchField = () => {
  inputRef.value!.focus();
};

const onInput = () => {
  setSearchValue(inputRef.value!.value);
};
</script>

<template>
  <div
    v-on:click="focusSearchField"
    v-bind:class="`w-full bg-white flex items-center gap-1 rounded-full p-2 border-2 hover:bg-gray-200 cursor-text ${
      focusState ? 'border-gray-400' : 'border-transparent'
    }`"
  >
    <div
      class="material-symbols-outlined text-gray-400 cursor-text select-none"
    >
      search
    </div>
    <input
      @focus="focusState = true"
      @blur="focusState = false"
      @input="onInput"
      type="text"
      ref="inputRef"
      v-bind:placeholder="LanguageWord[lang].header.searchPlaceholder"
      class="bg-transparent w-full focus:outline-none placeholder:text-sm text-sm placeholder:text-gray-400"
    />
  </div>
</template>
