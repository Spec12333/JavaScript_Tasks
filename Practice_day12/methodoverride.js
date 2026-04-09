class Animal {
    constructor() {

    }

    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Dog Barks");
    }
}

const d = new Dog();
d.speak();
// Output:
// Animal makes a sound
// Dog barks