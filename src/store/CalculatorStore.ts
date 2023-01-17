import { defineStore } from "pinia";
export const useCalculatorStore = defineStore("CalculatorStore", {
  state: () => {
    return {
      total: 0,
      operationToApply: "",
      numberToApply: 0,
    };
  },
  actions: {
    // setTotal,
    // multiply,
    // divide,
    // sum,
    // subtract,
    // percentage,
    resetTotal() {
      this.total = 0;
    },
  },
  getters: {},
});
