const defaultFloatPrecision = 10000000;

export const removeFirstCharZero = (text: string): string => {
  return text.substring(1);
};

// Math functions that handles floats
export const sum = (
  val1: number | string,
  val2: Number | string,
  floatPrecision: number = defaultFloatPrecision
): number => {
  return (
    Math.round((Number(val1) + Number(val2)) * floatPrecision) / floatPrecision
  );
};

export const subtraction = (
  val1: number | string,
  val2: Number | string,
  floatPrecision: number = defaultFloatPrecision
): number => {
  return (
    Math.round((Number(val1) - Number(val2)) * floatPrecision) / floatPrecision
  );
};

export const multiplication = (
  val1: number | string,
  val2: Number | string,
  floatPrecision: number = defaultFloatPrecision
): number => {
  return (
    Math.round(Number(val1) * Number(val2) * floatPrecision) / floatPrecision
  );
};

export const division = (
  val1: number | string,
  val2: Number | string,
  floatPrecision: number = defaultFloatPrecision
): number => {
  return (
    Math.round((Number(val1) / Number(val2)) * floatPrecision) / floatPrecision
  );
};
