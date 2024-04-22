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

// Will there be enough space?

/*
The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/  

function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : -(cap - on - wait);
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10


// Remove elements
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr){
  return arr.filter((e, i) => i % 2 == 0)
}
//Flatten and sort an array

/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a -b)
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Find the stray number

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// find the unique

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function stray(numbers) {
  let frequencyArr = {};
  
  for(n of numbers) { //iters the numbers array
    if(frequencyArr[n]){ // check to see if a duplicate occurs and increments
      frequencyArr[n]++;
    } else {
      frequencyArr[n] = 1; // assigns 1 on the first iteration of the loop
    }
  }
    
  for(key in frequencyArr) { //iterates the frequency obj
     if(frequencyArr[key] === 1) { // finds number with one recorded occurrences
       return Number(key); // returns the string converted to number
     }
  }  
}

console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3


function findUniq(arr) {
  let numberCount = {};
  
  for(let num of arr) {
    if(numberCount[num]) { // if it exists, increment
      numberCount[num]++;
    } else { // assign 1 
      numberCount[num] = 1;
    }    
  }
  
  for(key in numberCount) {
    console.log("key =", key)
    if(numberCount[key] === 1) {
      return Number(key)
    }
  } 
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2

//When provided with a letter, return its position in the alphabet.

//Input :: "a"

//Ouput :: "Position of alphabet: 1"

function position(letter){
  // Convert the letter to lowercase to handle both cases
    var lowercaseLetter = letter.toLowerCase();
    
    // Get the Unicode value of the letter and subtract the Unicode value of 'a'
    var position = lowercaseLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    
    // Check if the input is a valid alphabet character
    if (position >= 1 && position <= 26) {
        return "Position of alphabet: " + position;
    } else {
        return "Invalid input";
    }
}

console.log(position("a")); // Position of alphabet: 1


// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 

function isTriangle(a, b, c) {
  // Check if all sides are positive
  if (a <= 0 || b <= 0 || c <= 0) {
      return false;
  }
  // Check triangle inequality theorem
  if (a + b > c && a + c > b && b + c > a) {
      return true;
  } else {
      return false;
  }
}

// Test cases
console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(2, 2, 2)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(-5, 1, 3)); // false
console.log(isTriangle(0, 2, 3)); // false
console.log(isTriangle(1, 2, 9)); // false


// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// Active users
// Step 1: Create a variable
// Step 2: Use filter to keep users where isActive is true
// Step 3: Chain a map to put user names in that activeUers array
const activeUsers = users.filter((user) => user.isActive).map((user) => user.name);
console.log('active users (names): ', activeUsers);