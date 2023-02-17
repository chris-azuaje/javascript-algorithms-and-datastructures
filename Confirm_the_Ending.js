//Check if a string ends with the given target string
function confirmEnding(str, target) {

    //Line 5 code basically states to take the length of the first string, and subtract the length of the last and if that splice equals the target, then the outcome is true. Also it is important to note that we are triple equaling a slice of the string to the target.
    return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("He has to give me a new name", "name"));

//The code below was created by me to test the .slice method and better understand how it functions.
let test = "This is an example sentence"
console.log(test.slice(26 - 7));