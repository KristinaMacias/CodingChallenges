// Break Camel Case

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
  let result = str.replace(/[A-Z]/g, function (x) {
    return " " + x;
  });
  return result;
}

console.log(solution("camelCasing")); // "camel Casing"

// Explanation:
/*
/[A-Z]/g: This regular expression matches any uppercase letter ([A-Z]) in the input string. The g flag ensures that all occurrences of uppercase letters are replaced, not just the first one found.
The replace method then takes each uppercase letter found by the regular expression and replaces it with a space followed by the uppercase letter itself, effectively breaking up camel casing.
*/

// Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

/*
Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

function addLength(str) {
  return str.split(" ").map((word) => word + " " + word.length);
}

console.log(addLength("apple ban")); // ["apple 5", "ban 3"]

// Transportation on vacation

/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

function rentalCarCost(d) {  
    let cost = 0;
    
    if(d >= 7) {
      return cost = (d * 40) - 50;
    } else if(d >= 3) {
      return cost = (d * 40) - 20;
    } else {
      return cost = d * 40;
    }
  }

console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(4)); // 140
console.log(rentalCarCost(7)); // 230

// isIsogram

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

function isIsogram(str){
  let charMap = {}; // stores the count of each letter
  
  if(str === "") { // if str is empty, it is an isogram and returns true
    return true;
  } 
  
  for(let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase(); // lowercase all letters
    
    if(charMap[char]) { // checks to see if the char exists in the map. If it does, not an isogram
      charMap[char]++;
      return false;
    } else {
      charMap[char] = 1; // assigns 1, to start the count towards finding duplicate
    }  
  } return true; // no duplicates were found and string is not empty
}

console.log(isIsogram("Dermatoglyphics")); // true


// Two to One

/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  // new Set concatenates s1 and s2, while removing duplicates
  // Array from to convert string to array b/c strings are immuatable in JavaScript
  // sort the array
  // join the array back to a string
  return Array.from(new Set(s1 + s2)).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere")); // "aehrsty"