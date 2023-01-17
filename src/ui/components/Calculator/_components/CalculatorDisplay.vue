<template>
  <div class="flex items-end justify-end mb-5 px-5">
    <p class="text-6xl">
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
