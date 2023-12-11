<script setup lang="ts">
const reload = () => location.reload();
</script>

<template>
  <div
    @click="reload"
    class="text-4xl font-semibold select-none cursor-pointer flex items-center gap-2"
  >
    <span>Warranty</span>
    <span class="material-symbols-outlined text-yellow-400 text-4xl"
      >folder_open</span
    >
  </div>
</template>
