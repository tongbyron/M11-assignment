//STEP 1
let month = prompt('Enter a month');
let year = prompt('Enter a year');
let d = new Date(year, month, 0);
console.log('The number of days in the month is ' + d.getDate());

//STEP 2
let inputDate = prompt('Enter a date');
let d = new Date(inputDate);
let dateString = d.toDateString();
console.log('The month name from a date is ' + dateString.slice(4, 7));

//STEP 3
let inputDate = prompt('Enter a date');
let d = new Date(inputDate);
let dayWeek = d.getDay();
if (dayWeek == 0 || dayWeek == 6)
    console.log('The date is a weekend.');
else
    console.log('The date is a weekday.');

//STEP 4
let d = new Date();
d.setDate(d.getDate() - 1);
let dateString = d.toDateString();
console.log('Yesterday’s day of the week is ' + dateString.slice(0, 3));

//STEP 5
let d = new Date();
let dateString = d.toDateString();
console.log('The  first letter of the current day of the week is ' + dateString.slice(0, 1));
