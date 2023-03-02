// myVar will only appear locally (or inside of the function)

function myLocalScope() {
    // Only change code below this line
    let myVar = "This is the Var"
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);