class Rectangle {
    constructor(width, height) {
        this._height = height;
        this._width = width;
    }

    set height(value) {
        this._height = value;
    }

    set width(value) {
        this._width = value;
    }
    get retVal() {
        return this._height * this._width;
    }
}

let rectangle = new Rectangle(10, 20);
console.log(rectangle.retVal);
rectangle.height = 25;
rectangle.width = 25;
console.log(rectangle.retVal);