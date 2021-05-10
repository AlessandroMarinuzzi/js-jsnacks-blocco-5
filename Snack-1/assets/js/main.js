// Snack 1:
// Create 10 objects "zucchini" within an array and give a weight and length to each of them.

var zucchiniArray = [
    {weight:10, length:12},
    {weight:12, length:11},
    {weight:11, length:15},
    {weight:10, length:14},
    {weight:9, length:10},
    {weight:13, length:11},
    {weight:8, length:11},
    {weight:7, length:13},
    {weight:12, length:14},
    {weight:10, length:11}
];
console.log(zucchiniArray);

// Calculate zucchini total weight.
var weightSum = 0;
for(var i=0;i<zucchiniArray.length;i++){
    var courgette = zucchiniArray[i];
    var courgetteWeight = courgette.weight
    weightSum += courgetteWeight; 
}
console.log(weightSum);