const res = fetch("https://api.github.com/users/supratim50")

res.then((res) => {
    console.log("---------------------", res);
    return res.json()
})
.then((res) => {
    console.log("=========================",res)
})

