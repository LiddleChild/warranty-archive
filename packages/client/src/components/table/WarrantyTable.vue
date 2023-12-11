<script lang="ts">
import { Warranty } from "../../models/model.warranty";
import { build } from "../../utils/util.query";
import TableHeader from "./TableHeader.vue";
import WarrantyItem from "./WarrantyItem.vue";

export default {
  data() {
    return {
      warranties: [] as Warranty[],
      sortingState: { id: "expireDate", asc: false },
    };
  },
  methods: {
    async fetch() {
      const url = `http://localhost:6544/api/warranty?${build({
        search: "",
        sort: this.sortingState.id,
        asc: String(this.sortingState.asc),
      })}`;
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          this.warranties = json;
        });
    },
    setSortingState(id: string) {
      if (this.sortingState.id === id) {
        this.sortingState.asc = !this.sortingState.asc;
      } else {
        this.sortingState.id = id;
        this.sortingState.asc = true;
      }

      this.fetch();
    },
  },
  mounted() {
    this.fetch();
  },
  components: { WarrantyItem, TableHeader },
};
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
