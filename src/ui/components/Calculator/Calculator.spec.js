import { render, screen, fireEvent, within } from "@testing-library/vue";

import { describe, it, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import Calculator from "./Calculator.vue";

describe("Calculator", () => {
  describe("prints", () => {
    it("digits when pressed on keyboard", async () => {
      renderComponent();
      const numberOneBtn = screen.getByText("1");
      const numberTwoBtn = screen.getByText("2");
      const display = screen.getByTestId("calculator-display");

      await fireEvent.click(numberOneBtn);
      await fireEvent.click(numberTwoBtn);

      const displayedTotal = within(display).getByText("12");
      expect(displayedTotal).toBeTruthy();
    });

    it("do not displays more zero in a raw like 000", async () => {
      renderComponent();
      const keyboard = screen.getByTestId("calculator-keyboard");
      const numberZeroBtn = within(keyboard).getByText("0");
      const display = screen.getByTestId("calculator-display");

      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);

      const displayedTotal = await within(display).queryByText("000");
      expect(displayedTotal).toBeFalsy();
    });
  });
});
describe("reset button", () => {
  it("reset function prints 0 on screen", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const resetBtn = within(keyboard).getByText("AC");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberTwoBtn = within(keyboard).getByText("2");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(resetBtn);

    const displayedTotal = await within(display).getByText("0", {
      exact: true,
    });
    expect(displayedTotal).toBeTruthy();
  });
});

describe("calculate", () => {
  it("sum between two integers", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const sumOperationBtn = within(keyboard).getByText("+");
    const equalOperationBtn = within(keyboard).getByText("=");

    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("57", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });
  it("sum with float", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const sumOperationBtn = within(keyboard).getByText("+");
    const equalOperationBtn = within(keyboard).getByText("=");
    const floatBtn = within(keyboard).getByText(".");

    const display = screen.getByTestId("calculator-display");
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberFourBtn);

    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("57.4", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("sum with float case 2", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberOneBtn = within(keyboard).getByText("1");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const sumOperationBtn = within(keyboard).getByText("+");
    const equalOperationBtn = within(keyboard).getByText("=");
    const floatBtn = within(keyboard).getByText(".");

    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberOneBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberOneBtn);
    await fireEvent.click(numberTwoBtn);

    await fireEvent.click(sumOperationBtn);

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberThreeBtn);

    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("244.42", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });
  it("sum between three integers", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const sumOperationBtn = within(keyboard).getByText("+");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("60", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("sum between three integers without pressing equal button", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const sumOperationBtn = within(keyboard).getByText("+");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(sumOperationBtn);

    const result = await within(display).getByText("60", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("subtraction between two numbers", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const subtractionOperationBtn = within(keyboard).getByText("-");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(subtractionOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("9", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("subtraction between two numbers with float", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const subtractionOperationBtn = within(keyboard).getByText("-");
    const floatBtn = within(keyboard).getByText(".");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberFourBtn);

    await fireEvent.click(subtractionOperationBtn);

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("9.4", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("subtraction between two numbers even if second number is bigger than first one", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const subtractionOperationBtn = within(keyboard).getByText("-");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(subtractionOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("-9", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("subtraction between three numbers even if second number is bigger than first one", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFourBtn = within(keyboard).getByText("4");
    const subtractionOperationBtn = within(keyboard).getByText("-");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(subtractionOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(subtractionOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("-41", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication case 1", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("6", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication case 2", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("138", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication with float", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const floatBtn = within(keyboard).getByText(".");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("6.9", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication with float case 2", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberFiveBtn = within(keyboard).getByText("5");
    const floatBtn = within(keyboard).getByText(".");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberFiveBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("5", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication with float case 3", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberFiveBtn = within(keyboard).getByText("5");
    const floatBtn = within(keyboard).getByText(".");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFiveBtn);
    await fireEvent.click(floatBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFiveBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberFiveBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("631.25", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("sum and then moltiplication", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const sumOperationBtn = within(keyboard).getByText("+");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("115", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("multiplication and then sum", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberTwoBtn = within(keyboard).getByText("2");
    const numberThreeBtn = within(keyboard).getByText("3");
    const sumOperationBtn = within(keyboard).getByText("+");
    const multiplicationOperationBtn = within(keyboard).getByText("*");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(multiplicationOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(sumOperationBtn);
    await fireEvent.click(numberTwoBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("29", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("divide with integer as result", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberSixBtn = within(keyboard).getByText("6");
    const numberThreeBtn = within(keyboard).getByText("3");
    const divideOperationBtn = within(keyboard).getByText("÷");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberSixBtn);
    await fireEvent.click(numberSixBtn);
    await fireEvent.click(divideOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("22", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("divide with float as result", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberFourBtn = within(keyboard).getByText("4");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberSixBtn = within(keyboard).getByText("6");
    const divideOperationBtn = within(keyboard).getByText("÷");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberSixBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(divideOperationBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("21.3333333", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("divide with float as result, second case", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const numberFourBtn = within(keyboard).getByText("4");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberFiveBtn = within(keyboard).getByText("5");
    const numberSixBtn = within(keyboard).getByText("6");
    const divideOperationBtn = within(keyboard).getByText("÷");
    const equalOperationBtn = within(keyboard).getByText("=");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberSixBtn);
    await fireEvent.click(numberFiveBtn);
    await fireEvent.click(divideOperationBtn);
    await fireEvent.click(numberFourBtn);
    await fireEvent.click(equalOperationBtn);

    const result = await within(display).getByText("16.25", {
      exact: true,
    });

    expect(result).toBeTruthy();
  });

  it("divide and sum");
  it("divide and multiplicate");
  it("multiplicate and divide ");

  it("division for 0");

  it("multiplications too big");

  it("change of text size if too much numbers");
});

const renderComponent = () => {
  return render(Calculator, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
    },
  });
};
