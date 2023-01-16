<template>
  <div>
    <div class="flex space-x-4 px-5 py-3">
      <calculator-button :value="7" />
      <calculator-button :value="8" />
      <calculator-button :value="9" />
      <calculator-button value="÷" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <calculator-button :value="4" />
      <calculator-button :value="5" />
      <calculator-button :value="6" />
      <calculator-button value="X" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <calculator-button :value="1" />
      <calculator-button :value="2" />
      <calculator-button :value="3" />
      <calculator-button value="-" />
    </div>

    <div class="flex space-x-4 px-5 py-3">
      <calculator-button :value="0" />
      <calculator-button value="," />
      <calculator-button value="+" />
      <calculator-button value="=" />
    </div>
  </div>
</template>

<script>
import CalculatorButton from "./CalculatorButton.vue";

export default {
  components: { CalculatorButton },
};
</script>

<style></style>
