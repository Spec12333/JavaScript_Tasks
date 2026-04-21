class NotificationCenter {
    constructor() {
        this.apps = [];
    }

    subscribe(app) {
        if (app instanceof App) {
            this.apps.push(app);
            return "App subsicribed";
        }
        if (this.apps.includes(app)) {
            return "The app is already subscribed";
        }
        throw new Error("There is not such application in our base");
    }
    unsubscribe(app) {
        if (app instanceof App) {
            let index = this.apps.indexOf(app);

            if (index !== -1) {
                this.apps.splice(index, 1);
                return "App unsubscribed";
            }
        }
        throw new Error("There is not such application in our base");
    }
    notifyAll(notification) {
        this.apps.forEach((e) => e.recieve(notification));
        return;
    }
}
class App {

    recieve(notification) {
        throw new Error("The subclass must implement this method");
    }
}
class Facebook extends App {
    constructor(name) {
        super();
        this.name = name;
    }
    
    recieve(notification) {
        console.log(`${this.name} recieved ${notification}`);
        return;
    }
}

class Instagram extends App {
    constructor(name) {
        super()
        this.name = name;
    }

    recieve(notification) {
        console.log(`${this.name} recieved ${notification}`);
        return;
    }
}

class Telegram extends App {
    constructor(name) {
        super();
        this.name = name;
    }

    recieve(notification) {
        console.log(`${this.name} recieved ${notification}`);
        return;
    }
}

const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook));   // "App subscribed"
console.log(center.subscribe(instagram));  // "App subscribed"

center.notifyAll("New post added");
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

center.notifyAll("Story updated");
// only Facebook should receive the message