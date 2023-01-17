<template>
  <div>
    <div class="flex space-x-4 px-5 py-3">
      <btn-operator value="AC" @click="calculatorStore.reset" />
      <btn-operator value="%" />
      <btn-operator value="," />
      <btn-operator value="÷" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="7" />
      <btn-number :value="8" />
      <btn-number :value="9" />
      <btn-operator value="x" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="4" />
      <btn-number :value="5" />
      <btn-number :value="6" />
      <btn-operator value="-" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="1" />
      <btn-number :value="2" />
      <btn-number :value="3" />
      <btn-operator value="+" />
    </div>
    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="0" size="large" />
      <btn-operator class="items-right" value="=" />
    </div>
  </div>
</template>

<script>
import BtnNumber from "./CalculatorBtnNumber.vue";
import BtnOperator from "./CalculatorBtnOperator.vue";
import { useCalculatorStore } from "@/store/CalculatorStore.ts";

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },

  components: { BtnNumber, BtnOperator },
};
</script>

<style></style>
