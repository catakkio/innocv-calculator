<template>
  <div class="flex items-end justify-end mb-6 px-6">
    <p
      :class="{
        'text-7xl': calculatorStore.getDisplayedTotal.length < 9,
        'text-6xl':
          calculatorStore.getDisplayedTotal.length >= 9 &&
          calculatorStore.getDisplayedTotal.length < 12,
        'text-5xl':
          calculatorStore.getDisplayedTotal.length >= 12 &&
          calculatorStore.getDisplayedTotal.length < 15,
        'text-3xl': calculatorStore.getDisplayedTotal.length >= 15,
      }"
    >
      {{ calculatorStore.getDisplayedTotal }}
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
