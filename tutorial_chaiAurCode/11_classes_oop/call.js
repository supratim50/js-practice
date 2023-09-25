function setUsername(username) {
    this.username = username;
}

function createUser(email, password, username) {

    // setUsername(username) // this will not run as expected, cause it's not hold it's reference
    // setUsername.call(username) // this will also not working
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
    
}

const chai = new createUser("chai@google.com", "12345", "chai05");

console.log(chai)