<script lang="ts">
import { Warranty } from "../models/model.warranty";
import { getFormattedDate } from "../utils/util.date";
import WarrantyItem from "./WarrantyItem.vue";

export default {
  data() {
    return {
      warranties: [] as Warranty[],
    };
  },
  methods: {
    getFormattedDate,
    async fetchApi() {
      fetch("http://localhost:6544/api/warranty")
        .then((res) => res.json())
        .then((json) => {
          this.warranties = json;
        });
    },
  },
  mounted() {
    this.fetchApi();
  },
  components: { WarrantyItem },
};
</script>

<template>
  <table class="w-full">
    <thead class="text-left">
      <th class="uppercase">Product Name</th>
      <th class="uppercase">Effective Date</th>
      <th class="uppercase">Expire Date</th>
      <th class="uppercase">Note</th>
    </thead>
    <tbody>
      <WarrantyItem v-for="item in warranties" :warranty="item" />
    </tbody>
  </table>
</template>
