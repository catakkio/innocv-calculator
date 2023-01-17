import { defineStore } from "pinia";
import Operator from "@/utils/Operator";
import { removeFirstCharZero } from "@/utils/common";

export const useCalculatorStore = defineStore("CalculatorStore", {
  state: () => {
    return {
      previousTotal: undefined,
      displayedValue: "0",
      operatorToApply: "",
      firstNumber: undefined,
      lastNumber: undefined,
      isLastInputAnOperator: false,
    };
  },
  actions: {
    reset() {
      this.previousTotal = undefined;
      this.displayedValue = "0";
    },

    printDigit(digit: number) {
      if (this.displayedValue.charAt(0) === "0") {
        this.displayedValue = removeFirstCharZero(this.displayedValue);
      }

      if (this.isLastInputAnOperator) {
        this.displayedValue = digit.toString();
        this.isLastInputAnOperator = false;
      } else {
        this.displayedValue += digit;
      }
    },

    calculateDisplayedValue() {
      switch (this.operatorToApply) {
        case Operator.Sum:
          this.previousTotal = this.sum();
          break;
        case Operator.Subtraction:
          this.previousTotal = this.subtraction();
          break;
      }
      this.displayedValue = this.previousTotal?.toString();
    },

    sum() {
      return Number(this.previousTotal) + Number(this.displayedValue);
    },

    subtraction() {
      return Number(this.previousTotal) - Number(this.displayedValue);
    },

    equal() {
      this.calculateDisplayedValue();
    },

    setOperatorToApply(operator: Operator) {
      debugger;

      if (this.previousTotal === undefined) {
        this.previousTotal = Number(this.displayedValue);
      } else {
        this.calculateDisplayedValue();
      }

      this.operatorToApply = operator;
      this.isLastInputAnOperator = true;
      console.log("operation", this.operatorToApply);
    },
  },
  getters: {},
});
