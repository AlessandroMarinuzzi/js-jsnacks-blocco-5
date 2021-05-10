// Snack 4:
// Write a function to join 2 equally long arrays alternately taking an element from one and the other.
// ex. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var men = ["Alessandro","Eduardo","Andrei"]
var women = ["Carmen","Eveling","Stefania"]

function alternatelyJoin(firstArray, secondArray){
    var politicallyCorrect = [];
    if (firstArray.length === secondArray.length) {
        for (var i = 0; i < firstArray.length; i++) {
            politicallyCorrect.push(firstArray[i]);
            politicallyCorrect.push(secondArray[i]);
        }
        return politicallyCorrect;
    } else {
        return alert('The arguments must be equally long');
    }
};

console.log(alternatelyJoin(men, women));