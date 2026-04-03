class Car {
    constructor(speed) {
        this._speed = speed;
    }

    set setSpeed(speed) {
        if (speed > 200) {
            console.log("Too fast");
            return;
        }
        this._speed = speed;
    }
    
    get retVal() {
        return this._speed;
    }
}

let car = new Car();
car.setSpeed = 150;
console.log(car.retVal);