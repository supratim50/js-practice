function User(username, loggingCount, isLogedIn) {
    this.username = username;
    this.loggingCount = loggingCount;
    this.isLogedIn = isLogedIn
    return this
}

// const userOne = User('Supratim', 12, true);
// const userTwo = User('Babai', 15, false); // this will override the value of userOne

// console.log(userOne) 

const userOne = new User('Supratim', 12, true);
const userTwo = new User('Babai', 15, false);
console.log(userOne);
console.log(userTwo);

// NOTE: New keyword :
// 1. It creates an new object 
// 2. It calls a constructor function
// 3. Injects the arguments to a object