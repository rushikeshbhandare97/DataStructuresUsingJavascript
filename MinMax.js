let numArray = new Array();

for (index = 1; index <= 10; index++) {
  let num = Math.floor(Math.random() * 680) + 100;
  numArray.push(num);
}
console.log("Array is " + numArray);
let secondMinimum = numArray.sort()[1];
let secondMaximum = numArray.sort()[numArray.length - 2];

console.log("With Sorting ");
console.log(
  "Second Maximum : " + secondMaximum + "  Second Minimum : " + secondMinimum
);
