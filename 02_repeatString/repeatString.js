function repeatString(string, repetitions) {
    let repeatedString = "";
    if (repetitions < 0) {
        repeatedString = "ERROR";
    } else {
    for (let i = 1; i<=repetitions;i++) {
        repeatedString += string;
    }
}
    return repeatedString

}

// Do not edit below this line
module.exports = repeatString;
