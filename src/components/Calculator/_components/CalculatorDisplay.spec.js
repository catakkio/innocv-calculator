import { render, screen, fireEvent } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import CalculatorDisplay from "./CalculatorDisplay.vue";

describe("Calculator display", () => {
  it("should display the input value", () => {
    const inputText = 20000;
    render(CalculatorDisplay, { props: { value: inputText } });
    const initialText = screen.getByText(inputText);
    expect(initialText).toBeTruthy();
  });
});
