//Artis-Mickens, K
// June 14, 2022
// ------------------
// Working with ES6 functions - - Week #006
// Find The Most Common Words Assignment
// (Week 6 - CallBackFunctions: Find The Most Common Words Assignment)
// ------------------
//
// Print to console the first three most common words that appear in a given text
//

/*


Counting word occurrence
In this assignment, you'll need to start with a given string that contains a number of words. 
Then, define the number of times each word appears in the given text. After that point, you will see what the top three words used are.

The starter code already has some of this functionality implemented. Please go through the code in the 
wordcount.js file and read the comments to understand how this logic will work.

Your task is to print to console the first three most common words that appear in a given text.

Notes:

In the starter code, some comments start with the words "TO DO." This is where you could add your lines of codes to solve this assignment.

The words will need to be scrubbed of any punctuation. To do so, you may choose to use regex and "replace", 
or you may choose to get rid of any punctuation marks another way. It is up to you!

Watch out for casing. The JavaScript compiler does not think a lowercase and an uppercase letter are the 
same letter the way humans do. To avoid this, set the entire string to be in lowercase.*/

//
// MIT xPRO - Professional Certificate in Coding: Full Stack Development with MERN - April 2022
//




// This script will run when the page is loaded
window.onload = () => {
  let result = countWords();
  console.log(result);
};

function countWords() {
  // The text variable contains the long string of words
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  // TODO: add code here to remove the periods and commas and transform all words to lowercase letters
  text = text.replace(/[.,]/,"");
  text = text.toLocaleLowerCase();
  // The wordArray array will contains a key value pair for words and their occurences in the text
  const wordArray = text.split(" ");

  // This loop goes through the wordArray and creates the key value pair objects
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
  });

  // Turn objects into an array of arrays
  let myArray = Object.entries(wordCount);

  // TODO: sort the arrays based on the count number and store the result in a variable called bArray
  function compare(a,b){
    /*if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;*/
    return b[1] - a[1];
   }
  
  let bArray = (myArray.sort(compare)).slice(0,3);

  // return the first three most common words.
  return bArray;
}

//don't change this line
if (typeof module !== "undefined") {
  module.exports = countWords;
}
