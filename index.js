function isPalindrome(word) {
  // Write your algorithm here
  const splittedWord =word.split('');
  // console.log(splittedWord);
 const reversedWord= splittedWord.reverse().join('');
//  console.log(reversedWord);

 if(word===reversedWord){
  console.log(`The word ${word} is a palindrome`)
  return true;
 }
 else{
  console.log(`The word ${word} is not a palindrome`)

  return false;
 }
}
// console.log(isPalindrome("mom"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("ab"));

/* 
  Add your pseudocode here
 
initialize a constant  called splittedWord that holds the array of the splitted letters 
initialize a constant  called reversedWord that holds the reverse  and joined  splitted letters 

  if word eqauls reversedWord:
    word is a palindrome 
    return true 
  else 
  word is not a palindrome
  return false

*/

/*
  Add written explanation of your solution here
  
  split the word into an array of strings 
  reverse the word backwards and then join the strings to become one word 
  if the word reversed and joined  is the same as the original word 
   then the word is a palindrome and return true
   else 
    the word is not a palindrome and return false
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
