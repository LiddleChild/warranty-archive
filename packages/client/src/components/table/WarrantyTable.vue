<script setup lang="ts">
import { SortingState } from "../../models/model.sorting";
import { Warranty } from "../../models/model.warranty";
import TableHeader from "./TableHeader.vue";
import WarrantyItem from "./WarrantyItem.vue";

const { warranties, sortingState, setSortingState } = defineProps<{
  warranties: Warranty[];
  sortingState: SortingState;
  setSortingState: (id: string) => void;
}>();
</script>

<template>
  <table class="w-full">
    <thead class="text-left sticky top-0 bg-c-white">
      <TableHeader
        :id="'productName'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Product Name</TableHeader
      >
      <TableHeader
        :id="'effectiveDate'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Effective Date</TableHeader
      >
      <TableHeader
        :id="'expireDate'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Expire Date</TableHeader
      >
      <TableHeader
        :id="'note'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Note</TableHeader
      >
    </thead>
    <tbody>
      <WarrantyItem v-for="item in warranties" :warranty="item" />
    </tbody>
  </table>
</template>
