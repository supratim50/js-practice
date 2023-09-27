const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name")); // check the description

// to change the object property

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}