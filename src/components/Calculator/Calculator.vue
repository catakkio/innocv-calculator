<template>
  <div>
    <div class="calculator-container">
      <h1 className="text-3xl font-bold underline">Hello ddd!</h1>

      <calculator-display class="h-1/4" value="2000" />
      <calculator-keyboard />
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
