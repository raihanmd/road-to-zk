import test, { describe } from "node:test";
import { Vector } from "./vector";
import { expect } from "bun:test";
import { Matrix2x2 } from "./matrix-2x2";

describe("Matrix 2x2 Unit Test", () => {
  test("Matrix mul vec", () => {
    const m = new Matrix2x2(new Vector(1, 0), new Vector(0, 1));
    const v = new Vector(2, 2);

    const result = Matrix2x2.multiplyVector(m, v);
    console.log(result.toString());
    expect(result).toEqual(new Vector(2, 2));
  });

  test("Matrix mul matrix", () => {
    const m1 = new Matrix2x2(new Vector(2, 0), new Vector(0, 1));
    const m2 = new Matrix2x2(new Vector(1, 0), new Vector(1, 1));

    const result = Matrix2x2.multiplyMatrix(m1, m2);
    console.log(result.toString());
    expect(result).toEqual(new Matrix2x2(new Vector(2, 0), new Vector(2, 1)));
  });
});
