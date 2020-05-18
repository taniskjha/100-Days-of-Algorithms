// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.



function filterArray(arr) {
    const newarr = []
    arr.map(a => {
        if (typeof(a) == 'number' ) {
            newarr.push(a)
        }
    })
    return newarr
}

filterArray([1, "a", "b", 0, 15])
// output - [1,2]