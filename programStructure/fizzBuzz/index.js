for(let number = 0; number <= 100; number++) {
// creates a loop to print 1 to 100

    if(number % 3 === 0 && number % 5 === 0) {
// this code needs to go first as it takes precedence, if we dont put this conditions first, e.g 15 will show Fizz instead of FizzBuzz

        console.log("FizzBuzz")
    } else if(number % 3 === 0) {
        console.log("Fizz")
    } else if(number % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

console.log(number);

// another for loop

for (let n = 1; n < 100; n++) {

// Creates a loop to print 1 to 100

let output = "";

// Sets a binding or variable called output
// stores a blank, whatever instructions we write at the bottom, the variable will grasp at that value

if (n % 3 === 0) output += "Fizz";

// as we loop through, if the iteration has an "n" aka number that is divisible by 3, the variable output will now grsp "Fizz"

if (n % 5 === 0) output += "Buzz";

// Similar to above

console.log(output || n)
}