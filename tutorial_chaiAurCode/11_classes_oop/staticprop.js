class User {
    constructor(username) {
        this.username = username;
    }

    static createId() {
        console.log("Creating new ID : 123")
    }

    logMe() {
        console.log(`User name is ${this.username}`)
    }
}

const chai = new User("Chai!");
chai.logMe()