const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("Test: Triangle with blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
      );
    });
  });

  describe("Square test", () => {
    test("Test: Square with blue background", () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="blue"/>'
      );
    });
  });
  
  
  describe("Circle test", () => {
    test("Test: Circle with blue background", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue"/>'
      );
    });
  });