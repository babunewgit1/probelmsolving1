//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
const result = reverseString("hello world");
console.log(result);

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sum(arr) {
  const possitive = arr.filter((items) => items > 0);
  const sum = possitive.reduce((prev, current) => prev + current, 0);
  return sum;
}
const sumReuslt = sum([2, -5, 10, -3, 7]);
console.log(sumReuslt);

//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function frequentElement(arr) {
  const obj = {};
  let max = 0;
  for (element of arr) {
    if (obj[element] === undefined) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }

    if (obj[element] > max) {
      max = element;
    }
  }

  return max;
}
const frequentResult = frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
console.log(frequentResult);

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      console.error("Cannot divide by zero!");
    }
    return num1 / num2;
  } else {
    console.error("Invalid operator!");
  }
}
const number1 = 10;
const number2 = 5;
const operator = "+";
const calculateValue = calculate(number1, operator, number2);
console.log(calculateValue);

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{},.:;";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
const passwordLength = 12;
const newPassword = generateRandomPassword(passwordLength);
console.log(newPassword);

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanNumerals[roman[i]];
    const next = romanNumerals[roman[i + 1]];

    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
}

console.log(romanToInteger("IX"));

//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length < 2) {
    console.error("The array should contain at least two elements.");
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);

  let secondSmallest = sortedArr[0];
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] > secondSmallest) {
      secondSmallest = sortedArr[i];
      break;
    }
  }

  return secondSmallest;
}

const numbers = [10, 5, 2, 8, 1, 6];
const secondSmallestNumber = findSecondSmallest(numbers);
console.log(secondSmallestNumber);
