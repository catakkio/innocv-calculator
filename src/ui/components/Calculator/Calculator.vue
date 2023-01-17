<template>
  <div>
    <div class="calculator-container">
      <div class="w-full h-full">
        <calculator-display class="h-1/5" value="0" />
        <calculator-keyboard />
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorDisplay from "./_components/CalculatorDisplay.vue";
import CalculatorKeyboard from "./_components/CalculatorKeyboard.vue";

export default {
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
