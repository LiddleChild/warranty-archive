<script lang="ts">
import { ref } from "vue";

import WarrantyTable from "./components/table/WarrantyTable.vue";
import Add from "./components/Add.vue";
import Modal from "./components/Modal.vue";
import Logo from "./components/Logo.vue";
import WarrantyForm from "./components/form/WarrantyForm.vue";
import SearchField from "./components/SearchField.vue";
import { getAllWarranty } from "./services/service.warranty";
import { SortingState } from "./models/model.sorting";
import { Warranty } from "./models/model.warranty";

export default {
  components: { Logo, SearchField, Add, WarrantyTable, Modal, WarrantyForm },
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
    showModal(productId?: string) {
      this.isShowingModal = true;
      this.modalTitle = !productId ? "Add warranty" : "Edit warranty";

      this.warrantyFormDefault = !productId
        ? undefined
        : this.warranties.find((e) => e.id === productId);
    },
  },
  setup() {
    let searchValue = ref<string>("");
    let sortingState = ref<SortingState>({ id: "duration", asc: false });

    let warranties = ref<Warranty[]>([]);

    let isShowingModal = ref<boolean>(false);
    let modalTitle = ref<string>("");

    let warrantyFormDefault = ref<Warranty | undefined>(undefined);
    return {
      warranties,
      searchValue,
      sortingState,
      isShowingModal,
      modalTitle,
      warrantyFormDefault,
    };
  },
  mounted() {
    this.updateAllWarranty();
  },
};
</script>

<template>
  <Modal v-if="isShowingModal" @onClose="isShowingModal = false">
    <template v-slot:title>{{ modalTitle }}</template>
    <template v-slot:content>
      <WarrantyForm
        :warranty="warrantyFormDefault"
        @done="
          isShowingModal = false;
          updateAllWarranty();
        "
      />
    </template>
  </Modal>
  <div
    class="w-screen h-screen bg-c-white overflow-x-hidden overflow-y-hidden flex flex-col"
  >
    <div class="p-4 flex items-center gap-4">
      <Logo />
      <SearchField @value="setSearchValue" />
      <Add @onClick="showModal(undefined)" />
    </div>
    <div v-if="warranties.length > 0" class="h-full px-4 overflow-y-scroll">
      <WarrantyTable
        :warranties="warranties"
        :sorting-state="sortingState"
        :set-sorting-state="setSortingState"
        :showModal="showModal"
      />
    </div>
    <div v-else class="flex justify-center items-center h-full text-lg">
      Could not find the specify data.
    </div>
  </div>
</template>
