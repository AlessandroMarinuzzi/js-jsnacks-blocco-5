// Snack 5:
// Write a function that accepts 3 arguments: 1 array (array) and 2 numbers (a,b).-"b" can be at most as large as the number of elements in the array.
var valuesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRange (array, a, b){
    if (a >= b || b >= array.length){
        alert ("'a' must be less than 'b' and the value of 'b' must not exceed the length of the array.")
    } else {
        var newValuesArray = [];
        for(var i = a; i<=b ;i++){
            newValuesArray.push(i);
        } 
    }
    return newValuesArray;
}

console.log(getRange(valuesArray, 6, 9));
// Function must return all values between "a" and "b"