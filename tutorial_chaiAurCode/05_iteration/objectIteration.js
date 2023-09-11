const myObject = {
    js: 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// YOU CAN ALSO USE FOR IN LOON IN ARRAY BUT IT ALWAYS RETURN KEY, NOT VALUE
const programming = ['js', 'rb', 'py']

for (const key in programming) {
    console.log(programming[key])
}