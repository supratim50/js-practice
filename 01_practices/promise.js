const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task is complete!");
        resolve();
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consume!");
})

new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Async task 2!");
        resolve();
    }, 1000)
})
.then(() => {
    console.log("Promise Consume 2!")
})

const promiseThree = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "HItesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
})

const promiseFive = new Promise((resolve, reject) => {
    console.log("Resolve form promise five");
    resolve()
})


const consumer = async () => {
    const res = await promiseFive;
}

consumer()