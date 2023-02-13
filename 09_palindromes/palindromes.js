function palindromes(string) {
    string = string.replace(/[,.!\.]/g, "").toLowerCase();
    string = string.replace(/ /g,"");
    console.log(string);
    evaluation = string === reverseString(string);
    console.log(reverseString(string));
    return evaluation
}

function reverseString(string) {
    let reversedString = "";
    for (let i = 1; i <= string.length; i++) {

        reversedString += string[string.length - i]
    }
    return reversedString;
    }

// Do not edit below this line
module.exports = palindromes;
