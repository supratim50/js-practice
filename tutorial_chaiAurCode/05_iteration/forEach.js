const coding = ['js', 'ruby', 'cpp', 'java', 'python']

coding.forEach((item) => {
    console.log(item)
})

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) // NOTE: PASS THE REFFERENCE OF THE FUNCTION, NO NEED TO EXECUTE THE FUNCTION 

coding.forEach((item, index, arr) => { // IN FOREACH WE HAVE 3 PARAMETERS, ONE IS THE VALUE OF ARRAY, ONE IN INDEX OF ARRAY, ANOTHER ONE IS THE 'ARRAY'
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: 'javascript',
        langFileName: 'js'
    },
    {
        languageName: 'java',
        langFileName: 'java'
    },
    {
        languageName: 'python',
        langFileName: 'py'
    },
]

myCoding.forEach(item => {
    console.log(item.languageName);
})