<template>
  <p
    @click="onOperatorClick()"
    class="flex justify-center items-center h-20 w-20 border-2 border-solid rounded-full text-2xl cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
  >
    {{ operator }}
  </p>
</template>

<script>
import { useCalculatorStore } from "@/store/CalculatorStore.ts";
import Operator from "@/utils/Operator";

export default {
  props: {
    operator: {
      type: String,
      required: true,
    },
  },
  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },
  methods: {
    onOperatorClick() {
      if (this.operator === Operator.Reset) {
        this.calculatorStore.reset();
      } else if (this.operator === Operator.Equal) {
        this.calculatorStore.equal();
      } else {
        this.calculatorStore.setOperatorToApply(this.operator);
      }
    },
  },
};
</script>
