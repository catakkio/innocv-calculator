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

      const displayedNumber = within(display).getByText("12");
      expect(displayedNumber).toBeTruthy();
    });

    it("do not displays more zero in a raw like 000", async () => {
      renderComponent();
      const keyboard = screen.getByTestId("calculator-keyboard");
      const numberZeroBtn = within(keyboard).getByText("0");
      const display = screen.getByTestId("calculator-display");

      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);
      await fireEvent.click(numberZeroBtn);

      const displayedNumber = await within(display).queryByText("000");
      expect(displayedNumber).toBeFalsy();
    });
  });
});
describe("reset button", () => {
  it("reset function prints 0 on screen", async () => {
    renderComponent();
    const keyboard = screen.getByTestId("calculator-keyboard");
    const resetBtn = within(keyboard).getByText("AC");
    const numberThreeBtn = within(keyboard).getByText("3");
    const numberThwoBtn = within(keyboard).getByText("2");
    const display = screen.getByTestId("calculator-display");

    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThreeBtn);
    await fireEvent.click(numberThwoBtn);
    await fireEvent.click(resetBtn);

    const displayedNumber = await within(display).getByText("0", {
      exact: true,
    });
    expect(displayedNumber).toBeTruthy();
  });
});

const renderComponent = () => {
  return render(Calculator, {
    global: {
      plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
    },
  });
};
