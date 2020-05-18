// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    const minarr1 = Math.min(...arr1)
    const minarr2 = Math.min(...arr2)
    const maxarr1 = Math.max(...arr1)
    const maxarr2 = Math.max(...arr2)

    if (minarr1 > minarr2 && maxarr1 < maxarr2) {
        return true
    }

    else {
        return false
    }
}

canNest([1, 2, 3, 4], [0, 6]) 