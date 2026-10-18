import test, { describe } from "node:test";
import { Vector } from "./vector";
import { expect } from "bun:test";

describe("Vector Unit Test", () => {
  test("Vector Addition", () => {
    const v1 = new Vector(1, 2),
      v2 = new Vector(2, 3);

    const result = Vector.add(v1, v2);
    console.log(result.toString());

    expect(result).toEqual(new Vector(3, 5));
  });

  test("Vector Scalar", () => {
    const v = new Vector(1, 2);
    const scalar = 20;

    const result = Vector.scale(v, scalar);
    console.log(result.toString());

    expect(result).toEqual(new Vector(20, 40));
  });
});
