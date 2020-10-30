// BONUS:

/****************************************************************************
Make 1 example of an EvalError.
Look at the console to see what line the error is on to know what to do when
coming in contact with that error

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1
try {
    throw new EvalError('Hello', 'someFile.js', 10);
  } catch (e) {
    console.log(e instanceof EvalError);
  }
  