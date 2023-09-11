for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5");
    }
    // console.log(element)   
}

// console.log(i);

// LOOP IN ARRAY 
// =============

let myArray = ['flash', "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

// BREAK AND CONTINUE
// ==================

// for (let index = 1; index < 20; index++) {
//     if(index == 5) {
//         console.log('Detected 5');
//         break
//     }
//     console.log(`Value of i is ${index}`)
// }

for (let index = 1; index < 20; index++) {
    if(index == 5) {
        console.log('Detected 5');
        continue
    }
    console.log(`Value of i is ${index}`)
}