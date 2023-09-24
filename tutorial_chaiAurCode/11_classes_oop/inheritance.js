const user = {
    name: "Supratim",
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

const TASuppost= {
    makeAssignment: 'JS Assiments',
    __proto__: teachingSupport, // now we can use Teaching Support object properties
}

// console.log(TASuppost.isAvailable);

// another way 
teacher.__proto__ = user
console.log(teacher.name)

// ====================== Modern syntax of __proto__ ==================

Object.setPrototypeOf(teachingSupport, teacher); // here teacher is __proto__ object, 

console.log(teachingSupport.makeVideos)