const Coordinate = require('../lib/Coordinate.js');

describe('Coordinate', () => {
    // Test to verify that the Coordinate class can be instantiated.
    describe('Instantiate', () => {
        it('should be an instance of Coordinate class', () => {
          const coordinate = new Coordinate();
          expect(coordinate).toBeInstanceOf(Coordinate);
        });
      });
 // Test to verify that coordinates can be assigned.
      describe('Initialize Coordinate', () => {
        it('should set values properly', () => {
            const coordX = 100;
            const coordY = 200;
            const coordinate = new Coordinate(coordX,coordY);
            expect(coordinate.x).toBe(coordX);
            expect(coordinate.y).toBe(coordY);
        });
      });
  });