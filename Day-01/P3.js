// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) { 
  return arr.reduce((a,b) => Math.abs(a)+ Math.abs(b),0)
}

getAbsSum([2, -1, 4, 8, 10])


