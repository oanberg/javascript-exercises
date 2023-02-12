function sumAll(min, max) {
    let total = 0;
    if (min < 0 || max <0 || typeof min != "number" || typeof max != "number") {
        total = "ERROR";
        return total
    } else {
        if (min > max){
            for (let i = max; i <= min; i++) {
                total += i;
            } 
        } else {
    for (let i = min; i <= max; i++) {
        //console.log(i);
        total += i;
        //console.log(total);
    }
}
    return total
}
}

// Do not edit below this line
module.exports = sumAll;
