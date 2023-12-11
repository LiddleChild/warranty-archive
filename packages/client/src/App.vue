<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue";
import WarrantyTable from "./components/table/WarrantyTable.vue";
</script>

<template>
  <div
    class="w-screen h-screen bg-c-white overflow-x-hidden overflow-y-hidden flex flex-col"
  >
    <HeaderView />
    <div class="h-full px-4 overflow-y-scroll">
      <WarrantyTable />
    </div>
  </div>
</template>
