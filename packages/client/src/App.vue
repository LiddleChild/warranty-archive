<script lang="ts">
import { ref } from "vue";

import WarrantyTable from "./components/table/WarrantyTable.vue";
import Create from "./components/Create.vue";
import Logo from "./components/Logo.vue";
import SearchField from "./components/SearchField.vue";
import { getAllWarranty } from "./services/service.warranty";
import { SortingState } from "./models/model.sorting";
import { Warranty } from "./models/model.warranty";

export default {
  components: { Logo, SearchField, Create, WarrantyTable },
  methods: {
    updateAllWarranty() {
      getAllWarranty(
        this.searchValue,
        this.sortingState.id,
        this.sortingState.asc
      ).then((res) => (this.warranties = res));
    },
    setSortingState(id: string) {
      if (this.sortingState.id === id) {
        this.sortingState.asc = !this.sortingState.asc;
      } else {
        this.sortingState.id = id;
        this.sortingState.asc = true;
      }

      this.updateAllWarranty();
    },
    setSearchValue(value: string) {
      this.searchValue = value;

      this.updateAllWarranty();
    },
  },
  setup() {
    let searchValue = ref<string>("");
    let sortingState = ref<SortingState>({ id: "expireDate", asc: false });
    let warranties = ref<Warranty[]>([]);
    return {
      warranties,
      searchValue,
      sortingState,
    };
  },
  mounted() {
    this.updateAllWarranty();
  },
};
</script>

<template>
  <div
    class="w-screen h-screen bg-c-white overflow-x-hidden overflow-y-hidden flex flex-col"
  >
    <div class="p-4 flex items-center gap-4">
      <Logo />
      <SearchField @value="setSearchValue" />
      <Create @onClick="" />
    </div>
    <div v-if="warranties.length > 0" class="h-full px-4 overflow-y-scroll">
      <WarrantyTable
        :warranties="warranties"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
      />
    </div>
    <div v-else class="flex justify-center items-center h-full text-lg">
      Could not find the specify data.
    </div>
  </div>
</template>
