const Shape = require('../lib/Shape.js');

describe('Shape', () => {
    // Test to verify that the Shape class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of Shape class', () => {
        const shape = new Shape();
  
        expect(shape).toBeInstanceOf(Shape);
      });
    });
 // Test to verify that color can be assigned.
    describe('Initialize Color', () => {
      it('should set color properly', () => {
        const color = 'blue';
        const shape = new Shape(color);
        expect(shape.color).toBe(color);
      });
    });
  });

  //<rect x="50" y="25" width="200" height="200" fill="red"/>