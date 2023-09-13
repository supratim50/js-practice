const myNums = [1,2,3];

const myTotal = myNums.reduce(function (acc, curVal) {
    console.log(`acc: ${acc}, curVal: ${curVal}`);
    return acc + curVal
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299
    },
    {
        itemName: 'python',
        price: 499
    },
    {
        itemName: 'mobile development',
        price: 4999
    },
    {
        itemName: 'Data Scientist',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => (acc + item.price), 0);

console.log("pay " + priceToPay)