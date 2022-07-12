let size = 8;
let board = "";


for (n = 0; n < size; n++) {
    for (let x = 0; x < size; x++) {
        if ((x + n) % 2 == 0) {
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n";
} 

console.log(board);






/*

--set variables
let size = 8; --sets a limit for iterations to be used in our loop
let board = ""; --sets a blank placeholder to be filled with our if statement


for (n = 0; n < size; n++) {
--n represents the vertical axis aka the rows

    for (let x = 0; x < size; x++) {
--x represent the horizontal axis aka the columns

        if ((x + n) % 2 == 0) {
            board += " ";

--when we set n+x every second number will be divisible by 2, therefore, every second character will execute the " " space character.
and each new line will alternate between the " " space character

        } else {
            board += "#";
        }
-- for every other number not divisible by 2, "#" will be exected

    }
    board += "\n";
} 

-- \n creates a new line, this statement is attached to the for (n = 0; n < size; n++), thefore it ensures that the loop of x runs 8 iterations, aka characters across before breaking into new line.

console.log(board);

*/