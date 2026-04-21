class CharacterFactory {
    createCharacter(type, name) {
        if (typeof type !== "string" && typeof name !== "string") {
            return "The name and type must be string";
        }
        if (type.toLowerCase() === "warrior"){
            return new Warrior(name);
        }
        if (type.toLowerCase() === "mage") {
            return new Mage(name);
        }
        if (type.toLowerCase() === "archer") {
            return new Archer(name);
        }
        return "there is not any character type in our game";
    }
}

class Warrior {
    #hp;
    constructor(name) {
        this.name = name;
        this.type = "Warrior";
        this.#hp = 150;
    }

    getInfo() {
        return `${this.type}: ${this.name}, HP: ${this.#hp}`;
    }

    attack() {
        return `${this.name} attacks with a Sword`;
    }
}

class Mage {
    #hp;
    constructor(name) {
        this.name = name;
        this.type = "Mage";
        this.#hp = 100;
    }

    getInfo() {
        return `${this.type}: ${this.name}, HP: ${this.#hp}`;
    }

    attack() {
        return `${this.name} attacks with a Spell`
    }
}

class Archer {
    #hp;
    constructor(name) {
        this.name = name;
        this.type = "Archer";
        this.#hp = 120;
    }

    getInfo() {
        return `${this.type}: ${this.name}, HP: ${this.#hp}`;
    }

    attack() {
        return `${this.name} attacks with an Arrow`;
    }
}

const factory = new CharacterFactory();

const warrior = factory.createCharacter("warrior", "Thor");
const mage = factory.createCharacter("mage", "Merlin");
const archer = factory.createCharacter("archer", "Legolas");

console.log(warrior.getInfo()); // "Warrior: Thor, HP: 150"
console.log(mage.getInfo()); // "Mage: Merlin, HP: 100"
console.log(archer.getInfo()); // "Archer: Legolas, HP: 120"

console.log(warrior.attack()); // "Thor attacks with a sword"
console.log(mage.attack()); // "Merlin casts a spell"
console.log(archer.attack()); // "Legolas shoots an arrow"