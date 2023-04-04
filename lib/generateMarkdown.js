const Shape = require('./Shape.js');
const Square = require('./Square.js');
const Triangle = require('./Triangle.js');
const Circle = require('./Circle.js');
const Coordinate = require('./Coordinate.js');

function shape(data){
  var shapeType = data.shape;
  var shape = new Shape(data.shapeColor);
  if(shapeType == "square"){
    const width = 200;
    const height = 200;
    shape = new Square(data.shapeColor, width, height);
    return shape.render();
    //return '<rect x="50" y="25" width="200" height="200" fill="'+data.shapeColor+'"/>'
  }

  if(shapeType == "triangle"){
    const point1 = new Coordinate(150,10);
    const point2 = new Coordinate(5,190);
    const point3 = new Coordinate(295,190);
    shape = new Triangle(data.shapeColor,point1, point2, point3);
    return shape.render();
    //return '<polygon points="150,10 25,180, 275,180" style="fill:'+data.shapeColor+';stroke:purple;stroke-width:1" />';
  } else {
    const radio = 100;
    shape = new Circle(data.shapeColor,radio);
    return shape.render();
    //return '<circle cx="150" cy="100" r="100" fill="'+ data.shapeColor + '" />';
  }
}

function generateMarkdown(data) {
  return `
    <svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      ${shape(data)}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>
`;
}

module.exports= generateMarkdown;
