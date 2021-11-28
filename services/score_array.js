const scoreArray = [
   new Frame(0, 3),
    new Frame(5, 2),
    new Frame(8, 2),
    new Frame(9, 1),
    new Frame(10, 0),
    new Frame(10, 0),
    new Frame(10, 0),
    new Frame(9, 0),
    new Frame(10, 0),
    new Frame(9, 1)
];

let sum = 0;

for (let i = 0; i < scoreArray.length; i++) {
    sum += scoreArray[i];
}
console.log(sum);

module.exports = scoreArray;