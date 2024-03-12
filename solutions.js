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