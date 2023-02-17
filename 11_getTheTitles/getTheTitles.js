function getTheTitles(arrayOfObjects) {
    let listofTitles = [];
    for (let books of arrayOfObjects) {
        listofTitles.push(books["title"]);
    }
    return listofTitles;
}

// Do not edit below this line
module.exports = getTheTitles;

