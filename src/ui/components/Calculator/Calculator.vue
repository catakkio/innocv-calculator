<template>
  <div>
    <div class="calculator-container">
      <div class="w-full h-full">
        <calculator-display class="h-1/5" :value="calculatorStore.total" />
        <calculator-keyboard />
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorDisplay from "./_components/CalculatorDisplay.vue";
import CalculatorKeyboard from "./_components/CalculatorKeyboard.vue";
import { useCalculatorStore } from "@/store/CalculatorStore.ts";

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },

  components: { CalculatorKeyboard, CalculatorDisplay },
};
</script>

<style scoped>
.calculator-container {
  height: 700px;
  width: 400px;
  border: 1px solid gray;
}
</style>
