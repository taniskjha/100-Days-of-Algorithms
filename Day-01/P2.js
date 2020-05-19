// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
   return Math.min(...arr1) > Math.min(...arr2) &&
        Math.max(...arr1) < Math.max(...arr2) ? true : false
}

canNest([1, 2, 3, 4], [0, 6]) 