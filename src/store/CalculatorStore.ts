import { defineStore } from "pinia";
export const useCalculatorStore = defineStore("CalculatorStore", {
  state: () => {
    return {
      total: 0,
      displayedNumber: "0",
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
    reset() {
      this.total = 0;
      this.displayedNumber = "0";
    },
    printDigit(value: string) {
      if (this.displayedNumber === "0") {
        this.displayedNumber = "";
      }
      this.displayedNumber += value;
    },
  },
  getters: {},
});
