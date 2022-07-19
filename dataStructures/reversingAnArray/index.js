function reverseArray() {

}

function reverseArrayInPlace() {

}


// one of the solutions (changing the first array)

const reverseInPlace = (arr) => {
    let temp
    for(let i = 0; i < arr.length / 2; i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(reverseInPlace(arr));

// another solution where you dont change the primary array (pure function)

const reverse = (arr1) => {
    let result = []
    for (let elem of arr1) {
        result.unshift(elem)
    }
    return result
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr1)
console.log(reverse(arr1))