const res = fetch("https://api.github.com/users/supratim50")

res.then((res) => {
    // console.log("---------------------", res);
    return res.json()
})
.then((res) => {
    // console.log("=========================",res)
})

// fetch with async await 

const getData = async () => {
    const res = await fetch("https://api.github.com/users/supratim50")
    // console.log(await res.json());
    // or
    const resTwo = await res.json();
    console.log((resTwo));
}

getData()
