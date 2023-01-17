<template>
  <div>
    <div class="flex space-x-4 px-5 py-3">
      <btn-operator :operator="operation.Reset" />
      <btn-operator :operator="operation.Percentage" />
      <btn-operator :operator="operation.Comma" />
      <btn-operator :operator="operation.Division" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="7" />
      <btn-number :value="8" />
      <btn-number :value="9" />
      <btn-operator :operator="operation.Moltiplication" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="4" />
      <btn-number :value="5" />
      <btn-number :value="6" />
      <btn-operator :operator="operation.Subtraction" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="1" />
      <btn-number :value="2" />
      <btn-number :value="3" />
      <btn-operator :operator="operation.Sum" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <btn-number :value="0" size="large" />
      <btn-operator class="items-right" :operator="operation.Equal" />
    </div>
  </div>
</template>

<script>
import BtnNumber from "./CalculatorBtnNumber.vue";
import BtnOperator from "./CalculatorBtnOperator.vue";
import { useCalculatorStore } from "@/store/CalculatorStore.ts";
import Operator from "@/utils/Operator.ts";

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },

  components: { BtnNumber, BtnOperator },

  data() {
    return { operation: Operator };
  },
};
</script>

<style></style>
