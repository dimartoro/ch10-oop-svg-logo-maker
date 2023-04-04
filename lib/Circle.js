const Shape = require('./Shape.js');

class Circle extends Shape{
    constructor(color, rad){
        super(color);
        this.rad = rad;
        this.strShape = '<circle cx="150" cy="100" r="'+this.rad+'" fill="'+ this.color + '"/>';
   }
}

module.exports = Circle;