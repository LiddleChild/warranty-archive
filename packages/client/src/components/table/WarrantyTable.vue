<script lang="ts">
import { Warranty } from "../../models/model.warranty";
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
          this.warranties = json.concat(json).concat(json).concat(json);
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
    <thead class="text-left sticky top-0 bg-c-white">
      <th class="uppercase py-2">Product Name</th>
      <th class="uppercase py-2">Effective Date</th>
      <th class="uppercase py-2">Expire Date</th>
      <th class="uppercase py-2">Note</th>
    </thead>
    <tbody>
      <WarrantyItem v-for="item in warranties" :warranty="item" />
    </tbody>
  </table>
</template>
