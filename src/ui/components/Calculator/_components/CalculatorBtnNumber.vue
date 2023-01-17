<template>
  <p
    class="flex justify-center items-center h-20 border-2 border-solid rounded-full text-2xl cursor-pointer bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500"
    :class="size === 'large' ? 'large' : 'w-20'"
    @click="calculatorStore.printDigit(value)"
  >
    {{ value }}
  </p>
</template>

<script>
import { useCalculatorStore } from "@/store/CalculatorStore.ts";

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
  },

  setup() {
    const calculatorStore = useCalculatorStore();
    return { calculatorStore };
  },
};
</script>
<style scoped>
.large {
  width: 17rem;
}
</style>
