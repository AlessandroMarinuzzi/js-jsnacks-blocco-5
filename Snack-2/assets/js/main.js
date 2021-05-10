// Snack 2:
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

// Create 10 courgette objects.
var zucchiniArray = [
    { weight:10, length:12},
    { weight:12, length:18},
    { weight:11, length:15},
    { weight:10, length:14},
    { weight:9, length:17},
    { weight:13, length:11},
    { weight:8, length:19},
    { weight:7, length:13},
    { weight:12, length:16},
    { weight:10, length:11}
];
console.log(zucchiniArray);

// Split them in 2 different arrays, 1 for zucchini from 15 cm up and 1 for those under 15 cm.
var longZucchini = [];
var shortZucchini = [];

for(var i = 0; i < zucchiniArray.length; i++){
    if (zucchiniArray[i].length >= 15){
        longZucchini.push(zucchiniArray[i])
    } else {
        shortZucchini.push(zucchiniArray[i])
    }
}
console.log(longZucchini);
console.log(shortZucchini);

// Calculate the final weight of both arrays.
var shortZucchiniWeight = 0;
var longZucchiniWeight = 0;

for(var i = 0; i < longZucchini.length , i < shortZucchini.length; i++){
    shortZucchiniWeight += shortZucchini[i].weight;
    longZucchiniWeight += longZucchini[i].weight;

}
console.log(shortZucchiniWeight);
console.log(longZucchiniWeight);