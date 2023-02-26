// The code below shifts (removes) the first array and unshifts (adds) the new array to the beginning.

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);
console.log(myArray);