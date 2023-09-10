// Immediately Invoke Function Expression (IIFE)

(function chai() {
    console.log("This is Named IIFE")
})();

((name) => {
    console.log(`This is simple IIFE ${name}`)
})("Supratim")