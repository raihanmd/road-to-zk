import { Vector } from "./vector";

export class Matrix2x2 {
  constructor(
    public col1: Vector,
    public col2: Vector,
  ) {}

  static multiplyVector(m: Matrix2x2, v: Vector): Vector {
    // v.x * col1
    // v.y * col2

    return new Vector(
      m.col1.x * v.x + m.col2.x * v.y,
      m.col1.y * v.x + m.col2.y * v.y,
    );
  }

  static multiplyMatrix(m1: Matrix2x2, m2: Matrix2x2): Matrix2x2 {
    // multiplyVector m1 -> m2.col1
    //                   -> m2.col2
    return new Matrix2x2(
      Matrix2x2.multiplyVector(m1, m2.col1),
      Matrix2x2.multiplyVector(m1, m2.col2),
    );
  }

  public toString(): string {
    return `「${this.col1.x} ${this.col2.x}
  ${this.col1.y} ${this.col2.y}」`;
  }
}
