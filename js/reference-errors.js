// Examples
// console.log(name); // ReferenceError: name is not defined

// What went wrong here?
console.log(foo.substring(1)) // ReferenceError: Cannot access 'foo' before initialization
let foo = 'bar';

// What's wrong here?
function addNumbers() {
    let num1 = 2;
    let num2 = 3;
    return num1 + num2;
  }

  console.log(num1); // ReferenceError num1 is not defined.

/****************************************************************************
Make 3-5 different examples of reference errors.
Look at the console to see what line the error is on to know what to do when
coming in contact with that error

RESOURCE: CHECK THE README
****************************************************************************/

// Error 1
console.log(x);
// x is not defined, fix by creating a var x with a value

// Error 2
function y(){
  x = 10;
  return x;
}
console.log(x);

//x is not global - fix by callling the function y, and not x to get the val of x

// Error 3
for (let x=0 in obj){ //for var x in ob
  console.log(obj[x])
}
// fix by either not setting the intializer, or by defining all intial parameters

// Error 4
let name = 'Rando';
console.log('Hi' name);
// fix by using the '+' to concatenate the strings or using the print formatting ${}

// Error 5
let obj = {key = 'val'};
// fix by using ':' instead of '='