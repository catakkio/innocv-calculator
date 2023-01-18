<template>
  <div
    class="flex items-end justify-end my-6 px-6 border-2 border-gray-300 m-4"
  >
    <p
      :class="{
        'text-7xl': calculatorStore.getDisplayedTotal.length < 8,
        'text-6xl':
          calculatorStore.getDisplayedTotal.length >= 8 &&
          calculatorStore.getDisplayedTotal.length < 10,
        'text-5xl':
          calculatorStore.getDisplayedTotal.length >= 10 &&
          calculatorStore.getDisplayedTotal.length < 12,
        'text-3xl':
          calculatorStore.getDisplayedTotal.length >= 12 &&
          calculatorStore.getDisplayedTotal.length < 18,
        'text-2xl': calculatorStore.getDisplayedTotal.length >= 18,
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
