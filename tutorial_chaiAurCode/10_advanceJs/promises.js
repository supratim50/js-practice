console.log("================ Promise One ====================")

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email:"chai@example.com"})
    }, 1000)
})

promiseOne.then((function(user) {
    console.log(user)
}))

console.log("================ Promise Two ====================")

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: "Supratim", age: 23})
        } else {
            reject("User is not found!")
        }
    }, 1000);
})

promiseTwo
.then((user) => {
    console.log(user); // Console log the whole object
    return user.username // returning teh username from the user object
})
.then((username) => {
    console.log(username) // console log teh username
})
.catch((error) => {
    console.log(error) // console log the error
})
.finally(() => console.log("Our promise is either resolve or rejected")) // this is console log anyway

console.log("================ Promise Three ====================")

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: 'Supratim Mondal', password: "123456789"})
        } else {
            reject("Error: JS went wrong!")
        }
    }, 1000);   
})

async function consumePromiseThree() {
    try{
        const response = await promiseThree;
        console.log(response);
    } catch(e) {
        console.log(e)
    }
}

consumePromiseThree();