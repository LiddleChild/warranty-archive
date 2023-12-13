<script lang="ts">
export default {
  methods: {
    onClose(event: Event) {
      event.stopPropagation();
      this.$emit("onClose");
    },
  },
};
</script>

<template>
  <div
    @click="onClose"
    class="fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-75 z-10"
  >
    <div
      @click="(e: Event) => e.stopPropagation()"
      class="bg-c-white rounded-xl p-4 min-w-[512px] w-1/2 h-fit"
    >
      <div class="text-2xl flex justify-between items-center">
        <slot name="title">Title</slot>
        <button @click="onClose">
          <div
            class="material-symbols-outlined text-xl text-gray-500 cursor-pointer select-none rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-300"
          >
            close
          </div>
        </button>
      </div>
      <div><slot name="content">Content</slot></div>
    </div>
  </div>
</template>
