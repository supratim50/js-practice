Array.prototype.extraProperty = "Hitesh"; // adding an extra property

const myNewArray = [1,2,3,4];

// for (const v in myNewArray) {
//     console.log(v);
// }

// // Output : 
// // ======================
// // 0 // origianl property
// // 1 // origianl property
// // 2 // origianl property
// // 3 // origianl property
// // extraProperty // not origianl property

for (const v in myNewArray) {
    if(myNewArray.hasOwnProperty(v)){
        console.log(v);
    }
}

// // Output : 
// // ======================
// // 0 // origianl property
// // 1 // origianl property
// // 2 // origianl property
// // 3 // origianl property