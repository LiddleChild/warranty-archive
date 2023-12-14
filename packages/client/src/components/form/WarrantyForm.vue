<script lang="ts">
import { Warranty } from "../../models/model.warranty";
import { createWarranty } from "../../services/service.warranty";

export default {
  props: ["warranty"],
  setup({ warranty }: { warranty: Warranty }) {
    let productName = "";
    let effectiveDate = "";
    let duration = "";
    let durationUnit = "year";
    let note = "";
    let errorMessage = "";

    if (!!warranty) {
      productName = warranty.productName;
      effectiveDate = warranty.effectiveDate;
      note = warranty.note;

      let s = new Date(warranty.effectiveDate);
      let e = new Date(warranty.expireDate);

      let year = e.getFullYear() - s.getFullYear();
      let month = year * 12;
      let day = (e.getTime() - s.getTime()) / (1000 * 3600 * 24);
      month -= s.getMonth();
      month += e.getMonth();
      month = month <= 0 ? 0 : month;

      console.log(year, month, day);

      if (month >= 12) {
        duration = year.toString();
        durationUnit = "year";
      } else if (month > 0) {
        duration = month.toString();
        durationUnit = "month";
      } else {
        duration = day.toString();
        durationUnit = "day";
      }
    }

    return {
      productName,
      effectiveDate,
      duration,
      durationUnit,
      note,
      errorMessage,
    };
  },
  methods: {
    getExpireDate(effectiveDate: Date, duration: string, durationUnit: string) {
      let year = effectiveDate.getFullYear();
      let month = effectiveDate.getMonth();
      let day = effectiveDate.getDate();

      switch (durationUnit) {
        case "day":
          day += parseInt(duration);
          break;

        case "month":
          month += parseInt(duration);
          break;

        case "year":
          year += parseInt(duration);
          break;
      }

      return new Date(year, month, day).toString();
    },
    onSubmit(event: Event) {
      event.preventDefault();

      const [y, m, d] = this.effectiveDate.split("-");
      const effectiveDate = new Date(parseInt(y), parseInt(m), parseInt(d));

      const warranty: Warranty = {
        productId: "",
        productName: this.productName,
        note: this.note,
        effectiveDate: new Date(effectiveDate).toString(),
        expireDate: this.getExpireDate(
          new Date(effectiveDate),
          this.duration,
          this.durationUnit
        ),
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
        name="productName"
        v-model="productName"
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

<!--
  1. change expire date to duration and unit
  2. finish update page
-->
