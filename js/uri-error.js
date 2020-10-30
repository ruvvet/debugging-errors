// BONUS:

/****************************************************************************
Make 1 example of an URIError.
Look at the console to see what line the warning is on to know what to do when
coming in contact with it

RESOURCE: CHECK YOUR README 📖
****************************************************************************/

// Error 1

try {
    decodeURIComponent('%')
  } catch (e) {
    console.log(e instanceof URIError)  // true
  }