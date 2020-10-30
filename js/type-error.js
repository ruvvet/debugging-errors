/****************************************************************************
Make 5 examples of an TypeError.
Look at the console to see what line the error is on to know what to do when
coming in contact with that error

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1
const x = 10;
x();
// x is not a function , what are you doing

// Error 2
const x =10;
x = 'abc';
// cannot reassign a diff data type to same variable

// Error 3
const x =10;
x = 5;
// cannot reassign same constant name in same

// Error 4
[1, 3, 2].sort(5);
//should be [1,2,3].sort()

// Error 5
['a','b','c'].sort('a');