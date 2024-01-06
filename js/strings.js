//STEP 1
let name = prompt('Enter your name');
alert('The length of characters in the name is ' + name.length);

//STEP 2
let name = prompt('Enter your name');
let index = prompt('Enter index');
alert('The character at the specified index is ' + name.charAt(index));

//STEP 3
let first_name = prompt('Enter your first name');
let last_name = prompt('Enter your last name');
alert('Your name is ' + first_name.concat(' ', last_name));

//STEP 4
let pangram = 'The quick brown fox jumps over the lazy dog';
alert('The index of the word “fox” is ' + pangram.indexOf('fox'));

//STEP 5
let pangram = 'The quick brown fox jumps over the lazy fox';
alert('The index of the last instance of the word “fox” is ' + pangram.lastIndexOf('fox'));

//STEP 6
let pangram = 'The quick brown fox jumps over the lazy dog';
let full_name = prompt('Enter your full name');
alert(pangram.replace('the lazy dog', full_name));

//STEP 7
let pangram = 'The quick brown fox jumps over the lazy dog';
let search_word = prompt('Enter the search word');
alert('The index of the word "' + search_word + '" is ' + pangram.search(search_word));

//STEP 8
let old_string = 'The quick brown fox jumps over the lazy dog';
let new_string = old_string.slice(31);
alert(new_string.toUpperCase());

//STEP 9
let pangram = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
alert(pangram.trim().toLowerCase());

//STEP 10
let pangram = 'the quick brown fox jumps over the lazy fox';
alert(pangram.charAt(0).toUpperCase() + pangram.slice(1));
