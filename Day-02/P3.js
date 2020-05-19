// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.


function uniqueSort(arr) {
    const sortedArray = arr.sort()
    for (let i = 1; i < sortedArray.length; i++) {
        if (arr[i] % arr[i-1] !== 0 ) {
         console.log(arr[i])
       }
    }
}

uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10])