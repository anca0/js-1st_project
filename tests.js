// Homework - JavaScript Control Structures -  Using control structures, do the following:

//  REQUIREMENTS:

// display in the console the odd numbers from 1 to 50
// Implement it using an if statement (remember that we have a % operator that gives you the remainder of a division)
// Implement it using only a for statement, no ifs

// 1. implement the following function: function addition(first, last) { }
// The function needs to add all numbers between first and last and return the result (use iteration not maths!), including first and last, e.g. addition(2, 4) would return 9

// Bonus: Implement the function so that first and last don't need to be in ascending order (use iteration and conditions not maths!), e.g. addition(4, 2) would still return 9

// 2. Implement the following function: function maximum(a, b, c) {}
// The function returns the largest of the three numbers, e.g. maximum(-2, 0, 5) would return 5;
// Do not use Math.max! Use conditionals (ifs).

// 3. Implement the following function: function fizzBuzz(num){}
// The function returns a string that:
// lists all numbers from 1 to num
// every number that is divisible by 3 is replaced with the word 'fizz'
// every number that is divisible by 5 is replaced with the word 'buzz'
// every number that is divisible by both 3 and 5 is replaced by the word 'fizzbuzz'
// e.g. fizzBuzz(16) => '1 2 fizz 4 buzz 6 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16'


function addition(first, last) {
  if (first > last) {
    const aux = first;
    first = last;
    last = aux;
  }

  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum = sum + i;
  }

  return sum;
}
//addition(9,2); //call this function with any params you need to check result for exercise1

function displayNumbersFrom1To50() {
  for (let i = 1; i <= 50; i++) {
    console.log(i);
  }
}
//displayNumbersFrom1To50();   //  uncomment this line to display in the console the numbers from 1 to 50

function displayOddNumbersFrom1To50() {
  for (let i = 1; i <= 50; i = i + 2) {
    console.log(i);
  }
}

//displayOddNumbersFrom1To50();  //display();  uncomment this line to display in the console the odd numbers from 1 to 50

function maximum(a, b, c) {
  let max = a;

  if (max < b) {
    max = b;
  }

  if (max < c) {
    max = c;
  }

  return max;
}

//call here the function  maximum() to see result from exercise 2!

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
//call here the function  fizzbuzz() to see result from exercise 3!
