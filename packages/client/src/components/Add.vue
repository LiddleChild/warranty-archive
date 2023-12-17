<script lang="ts">
export default {
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
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
      <span>Add</span>
    </div>
  </button>
</template>
