<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const inputRef = ref<HTMLInputElement>();
    const focusState = ref<boolean>(false);

    return {
      inputRef,
      focusState,
    };
  },
  methods: {
    focusSearchField() {
      if (this.inputRef) this.inputRef.focus();
    },
    onInput() {
      if (this.inputRef) this.$emit("value", this.inputRef.value);
    },
  },
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
      placeholder="Search product name or note"
      class="bg-transparent w-full focus:outline-none placeholder:text-sm text-sm placeholder:text-gray-400"
    />
  </div>
</template>
