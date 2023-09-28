class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // always return password as a uppercase,we use getter setter for return another data
    get password() {
        return `${this._password}_supratim`
    }

    set password(pass) {
        this._password = pass.toUpperCase()
    }
}

const supratim = new User("s@mail.com", "abcd");
console.log(supratim.password);
console.log(supratim.email);