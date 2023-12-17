<script setup lang="ts">
import { LanguageWord } from "../../lang/lang.app";
import { LanguageOption } from "../../models/model.lang";
import { SortingState } from "../../models/model.sorting";
import { Warranty } from "../../models/model.warranty";
import TableHeader from "./TableHeader.vue";
import WarrantyItem from "./WarrantyItem.vue";

const { warranties, sortingState, setSortingState, showModal, lang } =
  defineProps<{
    warranties: Warranty[];
    sortingState: SortingState;
    setSortingState: (id: string) => void;
    showModal: (productId?: string) => void;
    lang: LanguageOption;
  }>();
</script>

<template>
  <table class="w-full">
    <thead class="text-left sticky top-0 bg-c-white">
      <TableHeader
        :id="'name'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >{{ LanguageWord[lang].content.productName }}</TableHeader
      >
      <TableHeader
        :id="'effectiveDate'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >{{ LanguageWord[lang].content.effectiveDate }}</TableHeader
      >
      <TableHeader
        :id="'duration'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >{{ LanguageWord[lang].content.duration }}</TableHeader
      >
      <TableHeader
        :id="'note'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >{{ LanguageWord[lang].content.note }}</TableHeader
      >
    </thead>
    <tbody>
      <WarrantyItem
        v-for="item in warranties"
        :lang="lang"
        :key="item.id"
        :warranty="item"
        :showModal="showModal"
      />
    </tbody>
  </table>
</template>
