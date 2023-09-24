const ourHero = ["Thor", "Spiderman"];

const heroPower = {
    thor: "Hammer",
    spiderman: "Spidy"
}

Object.prototype.supratim = function() {
    console.log("Supratim is in all the Object!")
}

Array.prototype.heySupratim = function() {
    console.log("Supratim says hello to you!")
}

// heroPower.supratim();
// ourHero.supratim();

// heroPower.heySupratim();
// ourHero.heySupratim()

// ==================== print real length ======================

String.prototype.printRealLength = function() {
    console.log(`The true length of string is ${this.trim().length}`);
}

const myName = "Supratim       ";
console.log(myName.printRealLength())