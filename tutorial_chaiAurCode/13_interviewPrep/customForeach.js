// =========================================
// Implement a custom forEach 
// =========================================


// Basic Approach 
// =========================================
Array.prototype.customForEachOne = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const myArr = [1,2,3,4];

myArr.customForEachOne((item, index) => console.log(`Value is ${item} - indexof ${index}`))

// TODO : Best Approach
// ==========================================
