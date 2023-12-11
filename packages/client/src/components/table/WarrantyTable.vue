<script lang="ts">
import { Warranty } from "../../models/model.warranty";
import TableHeader from "./TableHeader.vue";
import WarrantyItem from "./WarrantyItem.vue";

export default {
  data() {
    return {
      warranties: [] as Warranty[],
      sortingState: { id: "expire-date", asc: false },
    };
  },
  methods: {
    async fetchApi() {
      fetch("http://localhost:6544/api/warranty")
        .then((res) => res.json())
        .then((json) => {
          this.warranties = json.concat(json).concat(json).concat(json);
        });
    },
    setSortingState(id: string) {
      this.sortingState.id = id;
      this.sortingState.asc = true;
    },
  },
  mounted() {
    this.fetchApi();
  },
  components: { WarrantyItem, TableHeader },
};
</script>

<template>
  <table class="w-full">
    <thead class="text-left sticky top-0 bg-c-white">
      <TableHeader
        :id="'product-name'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Product Name</TableHeader
      >
      <TableHeader
        :id="'effective-date'"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        >Effective Date</TableHeader
      >
      <TableHeader
        :id="'expire-date'"
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
