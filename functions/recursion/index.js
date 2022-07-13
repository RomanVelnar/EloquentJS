


// First method
function isEven(number){
    if(number == 0){
        return true;
    } else {
        return(number % 2 == 0) ? true : false;
    }
    return isEven(number - 2);
}

console.log(isEven(-1))


// second method

function even(n) {
    if(n < 0){
        return even(-n);
    } else if(n % 2 == 0){
        return true;
    } else if(n % 2 == 1){
        return false;
    }
}
console.log(even(2))


// or

function evenNumber(num) {
    if(num < 0){
        return even(-num);
    } else if (num == 0){
        return true;
    } else if(num == 1) {
        return false;
    } else {
        return evenNumber(num - 2);
    }
}

console.log(evenNumber(2))