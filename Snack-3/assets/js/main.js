// Snack 3:
// Write a function to reverse a string.
function reverseString(string) {
    var splitString = string.split('');
    var reversedArray = splitString.reverse();
    var reversedString = reversedArray.join('');
    return reversedString;
};

console.log(reverseString("raelc t'nera 5 dna 2 kcanSJ"))