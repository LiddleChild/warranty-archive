<script lang="ts">
import { Warranty } from "../../models/model.warranty";
import { createWarranty } from "../../services/service.warranty";
import { getDate } from "../../utils/util.date";

export default {
  props: ["warranty"],
  setup({ warranty }: { warranty: Warranty }) {
    let name = "";
    let effectiveDate = "";
    let duration = "";
    let durationUnit = "year";
    let note = "";
    let errorMessage = "";

    if (!!warranty) {
      name = warranty.name;
      effectiveDate = getDate(warranty.effectiveDate);
      duration = warranty.duration.toString();
      durationUnit = warranty.durationUnit;
      note = warranty.note;
    }

    return {
      name,
      effectiveDate,
      duration,
      durationUnit,
      note,
      errorMessage,
    };
  },
  methods: {
    onSubmit(event: Event) {
      event.preventDefault();

      const [y, m, d] = this.effectiveDate.split("-");
      const effectiveDate = new Date(parseInt(y), parseInt(m), parseInt(d));

      const warranty: Warranty = {
        id: "",
        name: this.name,
        note: this.note,
        effectiveDate: new Date(effectiveDate).toString(),
        duration: parseInt(this.duration),
        durationUnit: this.durationUnit,
      };

      createWarranty(warranty).then((ok) => {
        if (ok) {
          this.$emit("done");
        } else {
          this.errorMessage = "Could not add warranty, please try again later.";
        }
      });
    },
  },
};
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-6 pt-4">
    <div class="flex flex-col">
      <label class="text-base text-gray-600">Product Name</label>
      <input
        name="name"
        v-model="name"
        type="text"
        class="focus:outline-none py-1 bg-transparent border-b hover:border-gray-500 focus:border-gray-500"
        required
      />
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">Effective Date</label>
      <input
        v-model="effectiveDate"
        type="date"
        class="text-sm py-1 focus:outline-none bg-transparent w-min border-b hover:border-gray-500 focus:border-gray-500"
        required
      />
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">Warranty duration</label>
      <div class="flex gap-3">
        <input
          type="number"
          min="1"
          class="focus:outline-none p-1 bg-transparent w-[128px] border-b hover:border-gray-500 focus:border-gray-500"
          v-model="duration"
          required
        />
        <select
          class="p-1 bg-transparent border-b hover:border-gray-500 focus:border-gray-500"
          v-model="durationUnit"
        >
          <option value="year">Year</option>
          <option value="month">Month</option>
          <option value="day">Day</option>
        </select>
      </div>
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">Note</label>
      <textarea
        v-model="note"
        placeholder="A note here"
        class="placeholder:text-sm text-sm p-2 focus:outline-none rounded-lg resize-none h-16 border hover:border-gray-500 focus:border-gray-500"
      ></textarea>
    </div>

    <div class="flex justify-between items-center">
      <div class="text-red-500">{{ errorMessage }}</div>
      <button
        class="bg-c-green text-c-white text-sm rounded-full px-5 py-2 hover:bg-opacity-75"
      >
        Add
      </button>
    </div>
  </form>
</template>
