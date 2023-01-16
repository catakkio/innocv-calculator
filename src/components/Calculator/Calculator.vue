<template>
  <div>
    <calculator-display />
    <calculator-keyboard />
  </div>
</template>

<script>
import CalculatorDisplay from "./_components/CalculatorDisplay.vue";
import CalculatorKeyboard from "./_components/CalculatorKeyboard.vue";
export default {
  components: { CalculatorKeyboard, CalculatorDisplay },
};
</script>

<style></style>
