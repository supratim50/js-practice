let myDate = new Date();

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString('default', {
    weekday: "short"
}));

// ------------------------- PRACTISE -------------------------------

/* 1. Write a JavaScript function to get the current date.

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/'));
console.log(curday('-'));
Output :
"11/13/2014"
"11-13-2014"
*/

// Solution ->

const curday = (str) =>  {
    let newDate = new Date();
    return `${newDate.getDate()}${str}${newDate.getMonth() + 1}${str}${newDate.getFullYear()}`
}


console.log(curday("-"));
