const Shape = require('./Shape.js');

class Triangle extends Shape{
    constructor(color, point1, point2, point3){
        super(color);
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.strShape = '<polygon points="'+this.point1.x+','+this.point1.y+' '+this.point2.x+','+this.point2.y+' '+this.point3.x+','+this.point3.y+'" style="fill:'+this.color+'"/>';
    }
}

module.exports = Triangle;