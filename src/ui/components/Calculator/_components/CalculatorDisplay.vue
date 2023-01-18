<template>
  <div class="flex items-end justify-end mb-5 px-6">
    <p
      :class="{
        'text-7xl': calculatorStore.displayedValue.length < 9,
        'text-6xl':
          calculatorStore.displayedValue.length >= 9 &&
          calculatorStore.displayedValue.length < 12,
        'text-5xl':
          calculatorStore.displayedValue.length >= 12 &&
          calculatorStore.displayedValue.length < 15,
        'text-3xl': calculatorStore.displayedValue.length >= 15,
      }"
    >
      {{ calculatorStore.displayedValue }}
    </p>
  </div>
</template>

<script>
import { useCalculatorStore } from "@/store/CalculatorStore.ts";

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },
};
</script>

<style></style>
