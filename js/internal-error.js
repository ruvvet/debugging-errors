// BONUS:

// What is wrong here?
function loopThatNeverEnds(x) {
    // The base case is missing

   loopThatNeverEnds(x + 1); // Recursive call
}

console.log(loopThatNeverEnds(0));

/****************************************************************************
Make 1 example of an internal error.
Look at the console to see what line the error is on to know what to do when
coming in contact with that error

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1

function recursiveloop(x){
    if (x){
    return x;}
    recursiveloop(x);
}
recursiveloop(1);
