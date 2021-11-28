const scoreArray = [
    0, 3,
    5, 2,
    8, 2,
    9, 1,
    10, 0,
    9, 1,
    10, 0,
    10, 0,
    9, 0,
    10, 0,
    9, 1
];

let sum = 0;

for (let i = 0; i < scoreArray.length; i++) {
    sum += scoreArray[i];
}
console.log(sum);

module.exports = scoreArray;