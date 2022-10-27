function isPalindrome(word) {
  const reverseWord = reverseString(word)
  return word === reverseWord
}

function reverseString(word) {
  return word.split('').reverse().join('')
}
/* 
  Add your pseudocode here
  take a string, 
  check if it is a palindrome
  return true if true
  return false if false

*/

/*
  Add written explanation of your solution here
  The code take a string, turns it into an array splitting each letter into an element, reverses the order of the elements and joins them back together. The code then takes this new string and compares it to the orignal string and if the two strings are the same it returns true, if they are no the same, it return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
