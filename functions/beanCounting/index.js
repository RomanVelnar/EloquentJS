// first method
function countBs1(str) {
    let counting = 0;
    for ( let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            counting++;
        }
    }
    return (counting);
}

console.log(countBs1("BbwheBBB"))


// second method
function countBs(string){
    let count = string.length;
    let count1 = string.replace(/B/g, "").length;
    return count - count1;
}
console.log(countBs(BabbabBBe));