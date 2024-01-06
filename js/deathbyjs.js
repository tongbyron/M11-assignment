//STEP 1
function sortAlphabeticalOrder(inputString) 
{
    return inputString.split("").sort().join("");
}

sortAlphabeticalOrder('webmaster');

//STEP 2
function convertFirsLetterUpperCase(inputString) 
{
    const words = inputString.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
}

convertFirsLetterUpperCase('the quick brown fox');

//STEP 3
function countVowels(inputString) 
{
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString.charAt(i) == 'a' || inputString.charAt(i) == 'e' || inputString.charAt(i) == 'i' || inputString.charAt(i) == 'o' || inputString.charAt(i) == 'u')
         `   count++;
    }

    return count;
}

countVowels('The quick brown fox');

//STEP 4
function generateRandomCharacters(length) 
{
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCharacters = '';

    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
        randomCharacters += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return randomCharacters;
}

generateRandomCharacters(8);

//STEP 5
function Longest_Country_Name(countryNameList) 
{
    var longestLength = 0;
    let longestCountryName = '';

    for (var i = 0; i < countryNameList.length; i++) 
    {
        if (countryNameList[i].length > longestLength) 
        {
            let longestLength = countryNameList[i].length;
            longestCountryName = countryNameList[i];
        }
    }

    return longestCountryName;
}

Longest_Country_Name(["Australia", "Germany", "United States of America"]);
