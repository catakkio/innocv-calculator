<template>
  <div class="flex items-end justify-end mb-6 px-6">
    <p
      :class="{
        'text-7xl': calculatorStore.displayedTotal.length < 9,
        'text-6xl':
          calculatorStore.displayedTotal.length >= 9 &&
          calculatorStore.displayedTotal.length < 12,
        'text-5xl':
          calculatorStore.displayedTotal.length >= 12 &&
          calculatorStore.displayedTotal.length < 15,
        'text-3xl': calculatorStore.displayedTotal.length >= 15,
      }"
    >
      {{ calculatorStore.displayedTotal }}
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
