class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  override getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

abstract class MediaPlayer {}
