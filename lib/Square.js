const Shape = require('./Shape.js');

class Square extends Shape{
    constructor(color, width, height){
        super(color);
        this.width = width;
        this.height = height;
        this.strShape = '<rect x="50" y="25" width="'+this.width+'" height="'+this.height+'" fill="'+this.color+'"/>';
    }
}

module.exports = Square;