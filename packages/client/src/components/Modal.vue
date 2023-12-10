<template>
  <div
    class="w-screen h-screen fixed bg-black bg-opacity-40 flex justify-center items-center"
  >
    <div class="bg-white w-96 aspect-square rounded-xl p-4">
      <div class="text-xl">
        <slot name="header">Default header</slot>
      </div>
      <div>
        <slot name="content">Default content</slot>
      </div>
    </div>
  </div>
</template>
