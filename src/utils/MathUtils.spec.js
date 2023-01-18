import { describe, it, expect } from "vitest";

import { sum, subtraction, multiplication, division } from "@/utils/MathUtils";

describe("sum", () => {
  it("works between integers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(12, 22)).toBe(34);
    expect(sum(121, 123)).toBe(244);
    expect(sum(321, 123)).toBe(444);
  });

  it("works with float", () => {
    expect(sum(12.12, 11.1)).toBe(23.22);
    expect(sum(14.2, 125.1)).toBe(139.3);
  });
  it("works with float and integer", () => {
    expect(sum(12.12, 11)).toBe(23.12);
    expect(sum(18.12, 11)).toBe(29.12);
    expect(sum(14.225, 53)).toBe(67.225);
  });
});

describe("subtraction", () => {
  it("works between integers", () => {
    expect(subtraction(1, 2)).toBe(-1);
    expect(subtraction(12, 22)).toBe(-10);
    expect(subtraction(121, 123)).toBe(-2);
    expect(subtraction(321, 123)).toBe(198);
  });

  it("works with float", () => {
    expect(subtraction(12.12, 11.1)).toBe(1.02);
    expect(subtraction(14.2, 125.1)).toBe(-110.9);
  });
  it("works with float and integer", () => {
    expect(subtraction(12.12, 11)).toBe(1.12);
    expect(subtraction(18.12, 11)).toBe(7.12);
    expect(subtraction(14.225, 53)).toBe(-38.775);
  });
});

describe("multiplication", () => {
  it("works between integers", () => {
    expect(multiplication(1, 2)).toBe(2);
    expect(multiplication(12, 22)).toBe(264);
    expect(multiplication(121, 123)).toBe(14883);
  });

  it("works with float", () => {
    expect(multiplication(12.12, 11.1)).toBe(134.532);
    expect(multiplication(14.2, 125.1)).toBe(1776.42);
  });
  it("works with float and integer", () => {
    expect(multiplication(12.12, 11)).toBe(133.32);
    expect(multiplication(18.12, 11)).toBe(199.32);
    expect(multiplication(14.225, 53)).toBe(753.925);
  });
});

describe("division", () => {
  it("works between integers", () => {
    expect(division(1, 2)).toBe(0.5);
    expect(division(12, 22)).toBe(0.5454545);
    expect(division(121, 123)).toBe(0.9837398);
  });

  it("works with float", () => {
    expect(division(12.12, 11.1)).toBe(1.0918919);
    expect(division(14.2, 125.1)).toBe(0.1135092);
  });
  it("works with float and integer", () => {
    expect(division(12.12, 11)).toBe(1.1018182);
    expect(division(18.12, 11)).toBe(1.6472727);
    expect(division(14.225, 53)).toBe(0.2683962);
  });
  it("handles zero", () => {
    expect(division(14.225, 0)).toBe(Infinity);
  });
});
