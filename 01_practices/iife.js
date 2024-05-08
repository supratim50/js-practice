// Global scope ke pollution se problem hote hai kayi bar, toh global scope se problem nehi ho isliye ham iife use karte hai

// Named IIFE
(function chai() {
    console.log("DB CONNECTED!")
})();

// Normal IIFE
(() => {
    console.log("DB CONNECTED TWO");
})();

// IIFE with arguments
((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Supratim')