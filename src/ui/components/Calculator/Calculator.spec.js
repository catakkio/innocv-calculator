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

      const displayedValue = within(display).getByText("12");
      expect(displayedValue).toBeTruthy();
    });

    it("do not displays more zero in a raw like 000", async () => {
      renderComponent();
      const keyboard = screen.getByTestId("calculator-keyboard");
      const numberZeroBtn = within(keyboard).getByText("0");
      const display = screen.getByTestId("calculator-display");

      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);

      const displayedValue = await within(display).queryByText("000");
      expect(displayedValue).toBeFalsy();
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

    const displayedValue = await within(display).getByText("0", {
      exact: true,
    });
    expect(displayedValue).toBeTruthy();
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
});

const renderComponent = () => {
  return render(Calculator, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
    },
  });
};
