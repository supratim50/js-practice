const user = {
    username : "Supratim",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this)
    }
}

// user.welcomeMessage()


const chai = () => {
    console.log(this)
}

chai()