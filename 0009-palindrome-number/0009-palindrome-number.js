/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    // false if first index and last index is different.
   

    const xString = x.toString();

     if(xString[0]!== xString[xString.length-1]){
        return false;
    }

    let reverseInput = '';

    for (let i = xString.length-1; i>=0; i--){
        reverseInput+=xString[i];
    }

    if(reverseInput===xString){
        return true;
    }

    return false;
};