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

    calculatedisplayedTotal() {
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
      }
      this.displayedTotal = this.total?.toString();
    },

    division() {
      const floatPrecision = 10000000;
      const parsedResult =
        Math.round(
          (Number(this.total) * floatPrecision) / Number(this.displayedTotal)
        ) / floatPrecision;
      return parsedResult;
    },

    equal() {
      this.calculatedisplayedTotal();
    },

    setOperatorToApply(operator: Operator) {
      debugger;
      if (this.total === 0) {
        this.total = Number(this.displayedTotal);
      } else {
        this.calculatedisplayedTotal();
      }

      this.operatorToApply = operator;
      this.isLastInputAnOperator = true;
      console.log("operation", this.operatorToApply);
    },
  },
  getters: {},
});
