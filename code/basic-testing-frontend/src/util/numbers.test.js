import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";
describe("transformToNumber()", () => {
  it("should change numeric string values to number of type number", () => {
    const number = "2";

    const result = transformToNumber(number);

    expect(result).toBeTypeOf("number");
  });

  it("should not transform a string that is not numeric", () => {
    const input = "invalid";

    const result = transformToNumber(input);

    expect(result).toBeNaN();
  });
});

describe("cleanNumbers", () => {
  it("should return an array of number values if an array of string number values us provided", () => {
    const numberValues = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });
  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
