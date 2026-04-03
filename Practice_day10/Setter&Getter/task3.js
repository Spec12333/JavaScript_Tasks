class Temperature {
    constructor(celcius) {
        this.temp = celcius;
    }

    get temp() {
        return this._celcius *  9 / 5 + 32; 
    }

    set temp(celcius) {
        this._celcius = celcius;
    }
}

let temperature = new Temperature(32);
console.log(temperature.temp);