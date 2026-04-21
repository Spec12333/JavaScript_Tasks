class CinemaFacade {
    #tv;
    #sound;
    #lights;
    constructor(tv, sound, lights) {
        this.#tv = tv;
        this.#sound = sound;
        this.#lights = lights;
    }
    watchMovie() {
        console.log(this.#tv.turnOn());
        console.log(this.#sound.turnOn());
        console.log(this.#lights.turnOn());
    }

    endMovie() {
        console.log(this.#tv.turnOf());
        console.log(this.#sound.turnOf());
        console.log(this.#lights.turnOf());
    }
}

class TV {
    turnOn() {
        return "Tv turned on";
    }

    turnOf() {
        return "Tv turned off";
    }
}

class SoundSystem {
    turnOn() {
        return "Sound System turned on";
    }

    turnOf() {
        return "Sound System turned off";
    }
}

class Lights {
    turnOn() {
        return "Lights dimmed";
    }
    
    turnOf() {
        return "Lights restored";
    }
}
const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

cinema.watchMovie();
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

cinema.endMovie();
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"