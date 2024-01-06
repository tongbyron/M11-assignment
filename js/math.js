//STEP 1
let number = prompt('Enter a number');
console.log('The positive version of that number is ' + Math.abs(number));

//STEP 2
let floating_point_value = prompt('Enter a floating point value (decimal)');
console.log('The round up to the nearest whole number of that floating point value is ' + Math.ceil(floating_point_value));

//STEP 3
let floating_point_value = prompt('Enter a floating point value (decimal)');
console.log('The round down to the nearest whole number of that floating point value is ' + Math.floor(floating_point_value));

//STEP 4
let numbers = prompt('Enter 5 comma delimited numbers');
console.log('The smallest number is ' + parseInt(numbers.split(',').sort()));
console.log('The largest number is ' + parseInt(numbers.split(',').reverse()));

//STEP 5
let number = prompt('Enter a number');
console.log('The square root of that number of that number is ' + Math.sqrt(number));
