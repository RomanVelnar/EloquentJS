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

function listToArray() {

}