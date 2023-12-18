<script setup lang="ts">
import { LanguageWord } from "../../lang/lang.app";
import { LanguageOption } from "../../models/model.lang";
import { Warranty } from "../../models/model.warranty";
import {
  createWarranty,
  updateWarranty,
} from "../../services/service.warranty";
import { getDate } from "../../utils/util.date";

const { lang, warranty, done, type } = defineProps<{
  lang: LanguageOption;
  warranty: Warranty | undefined;
  done: () => void;
  type: string;
}>();

let id = "";
let name = "";
let effectiveDate = "";
let duration = "";
let durationUnit = "year";
let note = "";
let errorMessage = "";

if (!!warranty) {
  id = warranty.id;
  name = warranty.name;
  effectiveDate = getDate(warranty.effectiveDate);
  duration = warranty.duration.toString();
  durationUnit = warranty.durationUnit;
  note = warranty.note;
}

const onSubmitHandler = (event: Event) => {
  event.preventDefault();

  const [y, m, d] = effectiveDate.split("-");
  const defaultEffectiveDate = new Date(
    parseInt(y),
    parseInt(m) - 1,
    parseInt(d)
  );

  const warranty: Warranty = {
    id,
    name,
    note,
    effectiveDate: new Date(defaultEffectiveDate).toString(),
    duration: parseInt(duration),
    durationUnit,
  };

  const handler = (ok: boolean) => {
    if (ok) {
      done();
    } else {
      errorMessage = "Could not add warranty, please try again later.";
    }
  };

  console.log(type);

  if (type === "create") createWarranty(warranty).then(handler);
  else updateWarranty(warranty).then(handler);
};
</script>

<template>
  <form @submit="onSubmitHandler" class="flex flex-col gap-6 pt-4">
    <div class="flex flex-col">
      <label class="text-base text-gray-600">{{
        LanguageWord[lang].form.productName
      }}</label>
      <input
        name="name"
        v-model="name"
        type="text"
        class="focus:outline-none py-1 bg-transparent border-b hover:border-gray-500 focus:border-gray-500"
        required
      />
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">{{
        LanguageWord[lang].form.effectiveDate
      }}</label>
      <input
        v-model="effectiveDate"
        type="date"
        class="text-sm py-1 focus:outline-none bg-transparent w-min border-b hover:border-gray-500 focus:border-gray-500"
        required
      />
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">{{
        LanguageWord[lang].form.warrantyDuration
      }}</label>
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
          <option value="year">
            {{ LanguageWord[lang].form.dropdown.year }}
          </option>
          <option value="month">
            {{ LanguageWord[lang].form.dropdown.month }}
          </option>
          <option value="day">
            {{ LanguageWord[lang].form.dropdown.day }}
          </option>
        </select>
      </div>
    </div>

    <div class="flex flex-col">
      <label class="text-base text-gray-600">{{
        LanguageWord[lang].form.note
      }}</label>
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
        {{ LanguageWord[lang].form.doneButton }}
      </button>
    </div>
  </form>
</template>
