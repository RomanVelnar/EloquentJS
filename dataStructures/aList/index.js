function arrayToList(array) {
    // write a function that builds a list structure like one shown below as argument
    // let list = {
    //     value: 1,
    //     rest: {
    //         value: 2,
    //         rest: {
    //             value: 3, 
    //             rest: null
    //         }
    //     }
    // };

    // tip 1: the function should start with the last element and work its way to the first one

    let result = {};
    if (Array.isArray(array)) {
        let currListItem = result;
        for(let item of array) {
            let newListItem = {
                value: item, 
                rest: null
            };
            if (typeof currListItem.rest === "undefined") {
                result = newListItem;
            } else {
                currListItem.rest = newListItem;
            }
            currListItem = newListItem;
        }
    }
    return result;
}

console.log(arrayToList([4, 3, 2, 1]))


// Function listToArray


function listToArray() {
    let result = [];
    if(typeof list ==="undefined" || list.value === undefined || undefined) {
        return result;
    } else {
        result.push(list.value);
        while (list.hasOwnProperty("rest") && list.rest !== null) {
            list = list.rest;
            if (list.hasOwnProperty("value")) {
                result.push(list.value);
            }
        } 
    }
    return result;
}

console.log(listToArray((arrayToList(10, 20, 30))))


// Function Prepend

function prepend(element, list) {
    return {
        value: element,
        rest: list 
    };
}

// Function nth

function nth(list, number) {
    return listToArray(list)[number];
}

// Function nthRecursive

function nthRecursive(list, number) {
    if (number === 0) {
        return list.value;
    } else if (list.rest === null) {
        return undefined;
    } else {
        return nthRecursive(list.rest, number-1);
    }
}


