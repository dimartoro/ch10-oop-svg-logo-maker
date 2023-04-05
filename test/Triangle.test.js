const Triangle = require('../lib/Triangle.js');
const Coordinate = require('../lib/Coordinate.js');

describe('Triangle', () => {
    // Test to verify that the Triangle class can be instantiated.
    describe('Instantiate', () => {
      it('should be an instance of Triangle class', () => {
        const point1 = new Coordinate(150,10);
        const point2 = new Coordinate(5,190);
        const point3 = new Coordinate(295,190);
        const color = 'blue';
        const triangle = new Triangle(color,point1,point2,point3);
        expect(triangle).toBeInstanceOf(Triangle);
      });
    });

    // Test to verify that render() method returns expected value.
    describe('render() method', () => {
      it('should return string with data', () => {
        const point1 = new Coordinate(150,10);
        const point2 = new Coordinate(5,190);
        const point3 = new Coordinate(295,190);
        const color = 'blue';
        const triangle = new Triangle(color,point1, point2, point3);
          expect(triangle.render()).toEqual('<polygon points="150,10 5,190 295,190" style="fill:blue"/>');
      });
    });

    // Test to verify that color can be assigned.
    describe('Initialize Color', () => {
      it('Should set color properly', () => {
        const point1 = new Coordinate(150,10);
        const point2 = new Coordinate(5,190);
        const point3 = new Coordinate(295,190);
        const color = 'blue';
        const triangle = new Triangle(color,point1, point2, point3);
          expect(triangle.color).toBe(color);
      });
    });

    // Test to verify that coordinates area instances of Coordinate.
    describe('Initialize Coordinates', () => {
      it('Should set coordinates properly', () => {
        const point1 = new Coordinate(150,10);
        const point2 = new Coordinate(5,190);
        const point3 = new Coordinate(295,190);
        const color = 'blue';
        const triangle = new Triangle(color,point1, point2, point3);
        expect(triangle.point1).toBeInstanceOf(Coordinate);
        expect(triangle.point2).toBeInstanceOf(Coordinate);
        expect(triangle.point3).toBeInstanceOf(Coordinate);
      });
    });

    // Test to verify that coordinates can be assigned.
    describe('Initialize Coordinates', () => {
      it('Should set coordinates properly', () => {
        const point1 = new Coordinate(150,10);
        const point2 = new Coordinate(5,190);
        const point3 = new Coordinate(295,190);
        const color = 'blue';
        const triangle = new Triangle(color,point1, point2, point3);
        expect(triangle.point1.x).toBe(point1.x);
        expect(triangle.point1.y).toBe(point1.y);
        expect(triangle.point2.x).toBe(point2.x);
        expect(triangle.point2.y).toBe(point2.y);
        expect(triangle.point3.x).toBe(point3.x);
        expect(triangle.point3.y).toBe(point3.y);
      });
    });
  });
