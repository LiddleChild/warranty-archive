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
    async fetchApi() {
      fetch("http://localhost:6544/api/warranty")
        .then((res) => res.json())
        .then((json) => {
          this.warranties = json;
        });
    },
    getFormattedDate,
  },
  mounted() {
    this.fetchApi();
  },
  components: { WarrantyItem },
};
</script>

<template>
  <table>
    <thead>
      <th class="uppercase">Product Name</th>
      <th class="uppercase">Effective Date</th>
      <th class="uppercase">Expire Date</th>
    </thead>
    <tbody>
      <WarrantyItem v-for="item in warranties" :warranty="item" />
    </tbody>
  </table>
</template>
