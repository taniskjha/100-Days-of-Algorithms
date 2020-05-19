// Converting Objects to Arrays

// Write a function that converts an object into an array, where each element represents a key-value pair.



function toArray(obj) {
return Object.entries(obj)
}


function toArray(obj) {
    const keys = [];
    for (let number in obj) {
        if (obj.hasOwnProperty(number)) {
            keys.push(number);
          }
    }
    }

toArray({ a: 1, b: 2 })
