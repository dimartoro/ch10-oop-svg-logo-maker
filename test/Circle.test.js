const Circle = require('../lib/Circle.js');

describe('Circle', () => {
    // Test to verify that the Circle class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of Circle class', () => {
        const circle = new Circle();
  
        expect(circle).toBeInstanceOf(Circle);
      });
    });

    // Test to verify that color can be assigned.
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const color = 'blue';
        const rad = 100;
        const circle = new Circle(color,rad);
        expect(circle.color).toBe(color);
      });
    });

    // Test to verify that radio(rad) can be assigned.
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const color = 'blue';
        const rad = 100;
        const circle = new Circle(color,rad);
        expect(circle.rad).toBe(rad);
      });
    });
    
    // Test to verify that render() method returns expected value.
    describe('render() method', () => {
      it('should return string with data', () => {
        const color = 'blue';
        const rad = 100;
        const circle = new Circle(color,rad);
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="100" fill="blue"/>');
      });
    });
  });