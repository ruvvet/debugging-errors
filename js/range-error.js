// What went wrong here?
// console.log('abc'.repeat(Infinity));  RangeError: Invalid count value

console.log('abc'.repeat(1)); // 'abc'

/****************************************************************************
Make 3-5 different examples of range errors.
Look at the console to see what line the error is on to know what to do when
coming in contact with that error

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

const arr = [1,2,3,4,5];

// Error 1
console.log(arr[5]);

// fix by not calling an index outside of the array length, ex arr[4] = 5

// Error 2
console.log(arr[-1]);
// fix by not calling a negative index. If you want to call the last element, use arr[arr.length-1];

// Error 3
(42).toString(0);
// fix by not trying to convert a number into a string with log base 0, you can use (2, 8, 10, 16)

// Error 4
'a'.repeat(2**28);
// fix by not trying to repeat 'a' a gazllion times


// Error 5
'a'.repeat(-1);
// fix by not trying to repeat 'a' negative times