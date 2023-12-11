<script lang="ts" setup>
import { SortingState } from "../../models/model.sorting";

const { id, sortingState, setSortingState } = defineProps<{
  id: string;
  sortingState: SortingState;
  setSortingState: (id: string) => void;
}>();

const handler = () => {
  if (sortingState.id === id) sortingState.asc = !sortingState.asc;
  else setSortingState(id);
};
</script>

<template>
  <th class="uppercase py-2 select-none cursor-pointer" v-on:click="handler">
    <span class="flex items-center gap-1 text-sm">
      <slot></slot>
      <span v-if="sortingState.id === id" class="material-symbols-outlined">{{
        sortingState.asc ? "arrow_drop_up" : "arrow_drop_down"
      }}</span>
    </span>
  </th>
</template>
