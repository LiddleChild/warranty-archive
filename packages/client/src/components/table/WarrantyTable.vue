<script setup lang="ts">
import { SortingState } from "../../models/model.sorting";
import { Warranty } from "../../models/model.warranty";
import TableHeader from "./TableHeader.vue";
import WarrantyItem from "./WarrantyItem.vue";

const { warranties, sortingState, setSortingState, showModal } = defineProps<{
  warranties: Warranty[];
  sortingState: SortingState;
  setSortingState: (id: string) => void;
  showModal: (productId?: string) => void;
}>();
</script>

<template>
  <table class="w-full">
    <thead class="text-left sticky top-0 bg-c-white">
      <TableHeader
        :id="'name'"
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
        :id="'duration'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Duration</TableHeader
      >
      <TableHeader
        :id="'note'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Note</TableHeader
      >
    </thead>
    <tbody>
      <WarrantyItem
        v-for="item in warranties"
        :key="item.productId"
        :warranty="item"
        :showModal="showModal"
      />
    </tbody>
  </table>
</template>
