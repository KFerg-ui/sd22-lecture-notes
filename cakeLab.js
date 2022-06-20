class Cake {
  constructor(flavor, icing, decoration) {
    (this.flavor = flavor),
      (this.icing = icing),
      (this.decoration = decoration);
  }
  describe() {
    console.log(
      `It is a ${this.flavor} cake with ${this.icing} frosting and ${this.decoration}`
    );
  }
}

let chocolateCake = new Cake("chocolate", "caramel", "sprinkles");
let whiteCake = new Cake("chocolate", "caramel", "sprinkles");
let redvelvetCake = new Cake("chocolate", "caramel", "sprinkles");
let coffeeCake = new Cake("chocolate", "caramel", "sprinkles");

chocolateCake.describe();
// Should print:
// 'It is a chocolate cake, with caramel frosting, and sprinkles'

//* ABSTRACTION
class Rectangle {
  constructor(height, width) {
    (height = this.height), (width = this.width);
  }
  area() {
    return this.height * this.width;
  }
}
const shape = new Rectangle(10, 8);
console.log(shape);

function showArea(shape) {
  return `this shape's area is ${shape.area()}`;
}

showArea(shape);
