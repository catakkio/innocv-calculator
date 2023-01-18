import { defineStore } from "pinia";
import Operator from "@/utils/Operator";
import {
  removeFirstCharZero,
  sum,
  subtraction,
  multiplication,
  division,
} from "@/utils/MathUtils";

export const useCalculatorStore = defineStore("CalculatorStore", {
  state: () => {
    return {
      total: 0,
      displayedTotal: "0",
      operatorToApply: "",
      isLastInputAnOperator: false,
    };
  },
  actions: {
    reset() {
      this.total = 0;
      this.displayedTotal = "0";
    },

    printDigit(digit: number) {
      const maxDigitInsertedByUser = 9;
      if (this.displayedTotal.charAt(0) === "0") {
        this.displayedTotal = removeFirstCharZero(this.displayedTotal);
      }

      if (this.isLastInputAnOperator) {
        this.displayedTotal = digit.toString();
        this.isLastInputAnOperator = false;
      } else if (this.displayedTotal.length <= maxDigitInsertedByUser) {
        this.displayedTotal += digit;
      }
    },

    calculatedisplayedTotal(operator: Operator) {
      switch (this.operatorToApply) {
        case Operator.Sum:
          this.total = sum(this.total, this.displayedTotal);
          break;
        case Operator.Subtraction:
          this.total = subtraction(this.total, this.displayedTotal);
          break;
        case Operator.Multiplication:
          this.total = multiplication(this.total, this.displayedTotal);
          break;
        case Operator.Division:
          this.total = division(this.total, this.displayedTotal);
          break;
        case Operator.Module:
          console.warn("Module operation to be implemented");
          break;
        case Operator.Percentage:
          console.warn("Percentage operation to be implemented");
          break;
        default:
          this.total = Number(this.displayedTotal);
          break;
      }
      this.operatorToApply = operator;
      this.isLastInputAnOperator = true;
      this.displayedTotal = this.total?.toString();
    },

    setNextOperatorToApply(operator: Operator) {
      this.operatorToApply = operator;
      this.isLastInputAnOperator = true;
    },
  },
  getters: {
    getDisplayedTotal: (state) => state.displayedTotal,
  },
});
