function range(start, end, step) {
    // create an array that returns all the numbers created
    let rangeArray = [];
    step = (arguments[2] || 1);

    if(start <= end) {
        for (i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    } else {
        for (i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    }

    return rangeArray;

}

function sum(numbers) {
    total = 0;
    for(i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}


console.log(sum(range(1, 10)))