<template>
  <div>
    <div class="calculator-container noselect rounded-lg">
      <div class="w-full h-full">
        <calculator-display class="h-1/6" data-testid="calculator-display" />
        <calculator-keyboard data-testid="calculator-keyboard" />
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
  height: 680px;
  width: 410px;
  border: 1px solid gray;
  box-shadow: 10px 10px 10px grey;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>
