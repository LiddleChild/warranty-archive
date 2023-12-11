<template>
  <button
    v-on:click="console.log('creating...')"
    class="bg-white rounded-full border-white broder-2 h-11 hover:bg-gray-200"
  >
    <div class="flex items-center gap-1 p-2">
      <div
        class="material-symbols-outlined text-gray-400 cursor-pointer select-none"
      >
        add
      </div>
      <span>Create</span>
    </div>
  </button>
</template>
