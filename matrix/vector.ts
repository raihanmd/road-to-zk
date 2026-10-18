export class Vector {
  constructor(
    public x: number,
    public y: number,
  ) {}

  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static scale(v: Vector, scalar: number): Vector {
    return new Vector(v.x * scalar, v.y * scalar);
  }

  public toString(): string {
    return `「${this.x}
  ${this.y}」`;
  }
}
