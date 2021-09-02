//Taking input from console.
const prompt = require("prompt-sync")();

const primeFactor = [];

// take input from the user
let userNumber = parseInt(prompt("Enter the number to find prime factor : "));

//this for loop iterate till the number which is entered by the user.
for (let i = 2; i <= userNumber; i++) {
  /*
  for the remender if equal to 0 yes printing the i  value 
  which is coming from for loop and then user number will get divide by the same i  value.
  */
  while (userNumber % i == 0) {
    console.log(i);
    userNumber = userNumber / i;
    primeFactor.push(i);
  }
}

console.log(
  `Prime factors of an given number ${userNumber} is : ` + primeFactor
);//Taking input from console.
const prompt = require("prompt-sync")();

const primeFactor = [];

// take input from the user
let userNumber = parseInt(prompt("Enter the number to find prime factor : "));

//this for loop iterate till the number which is entered by the user.
for (let i = 2; i <= userNumber; i++) {
  /*
  for the remender if equal to 0 yes printing the i  value 
  which is coming from for loop and then user number will get divide by the same i  value.
  */
  while (userNumber % i == 0) {
    console.log(i);
    userNumber = userNumber / i;
    primeFactor.push(i);
  }
}

console.log(
  `Prime factors of an given number ${userNumber} is : ` + primeFactor
);
