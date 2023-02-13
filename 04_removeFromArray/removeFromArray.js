function removeFromArray(array, ...removed) {
    let cleanedArray = array;
    for (const r of removed) {
        //console.log(`Removing ${r}`);
        cleanedArray = cleanedArray.filter(element => element !== r);
        //console.log(cleanedArray);

    }
    return cleanedArray
}

// Do not edit below this line
module.exports = removeFromArray;
