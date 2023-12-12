<script setup lang="ts">
import WarrantyTable from "./components/table/WarrantyTable.vue";
import Create from "./components/Create.vue";
import Logo from "./components/Logo.vue";
import SearchField from "./components/SearchField.vue";
</script>

<template>
  <div
    class="w-screen h-screen bg-c-white overflow-x-hidden overflow-y-hidden flex flex-col"
  >
    <div class="p-4 flex items-center gap-4">
      <Logo />
      <SearchField />
      <Create />
    </div>
    <div class="h-full px-4 overflow-y-scroll">
      <WarrantyTable />
    </div>
  </div>
</template>
