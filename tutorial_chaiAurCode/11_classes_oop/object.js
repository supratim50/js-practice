function multipleBy5(num) {
    return num*5;
}
multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)

function createChai(chaiName, price) {
    this.chaiName = chaiName;
    this.price = price
}


createChai.prototype.increase = function() {
    this.score++
}

createChai.prototype.printMe = function() {
    console.log(`Price of ${this.chaiName} is ${this.price}`)
}

const keshorChai = new createChai("Keshore Chai", 50);

keshorChai.printMe()