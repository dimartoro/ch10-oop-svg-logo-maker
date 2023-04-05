const Square = require('../lib/Square.js');

describe('Square', () => {
    // Test to verify that the Square class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of Square class', () => {
        const square = new Square();
  
        expect(square).toBeInstanceOf(Square);
      });
    });

    // Test to verify that color can be assigned.
    describe('Initialize color', () => {
      it('should set color properly', () => {
        const color = 'blue';
        const width = 200; 
        const height = 100;
        const square = new Square(color,width,height);
        expect(square.color).toBe(color);
      });
    });

    // Test to verify that width can be assigned.
    describe('Initialize color', () => {
      it('should set width properly', () => {
        const color = 'blue';
        const width = 200; 
        const height = 100;
        const square = new Square(color,width,height);
        expect(square.width).toBe(width);
      });
    });

    // Test to verify that height can be assigned.
    describe('Initialize color', () => {
      it('should set width properly', () => {
        const color = 'blue';
        const width = 200; 
        const height = 100;
        const square = new Square(color,width,height);
        expect(square.height).toBe(height);
      });
    });

    // Test to verify that render() method returns expected value.
    describe('render() method', () => {
      it('should return string with data', () => {
        const width = 100;
        const height = 200;
        const color = 'blue';
        const square = new Square(color, width, height);
          expect(square.render()).toBe('<rect x="50" y="20" width="100" height="200" fill="blue"/>');
      });
    });
  });