// FOR OF

const arr = [1,2,3,4,5]
for(const num of arr) {
    // console.log(num);
}

// MAPS

const map = new Map(); // Map sets unique value 
map.set('IN', 'India');
map.set('USA', 'United State Of America');
map.set('IN', 'India');
map.set('FR', 'France');

// console.log(map);

for (const [key, value] of map) { // [key, value] is destructur value of map variable
    console.log(key, ':-', value)
}

// ==================== Second Day =====================
const myNumber = [1,2,3,4,5,6,7,8,9,10];

// console.log(myNumber.filter((num) => num > 4))

// DOING THE SAME THING IN FOREACH
const newNums = [];
myNumber.forEach((num) => {
    if(num > 4) {
        newNums.push(num);
    }
})

console.log(newNums);

