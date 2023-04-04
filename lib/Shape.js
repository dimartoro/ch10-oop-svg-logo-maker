class Shape{
    constructor(color){
        this.color = color;
        this.strShape = '';
    }

    render(){
        return this.strShape;
    }
}
module.exports = Shape;