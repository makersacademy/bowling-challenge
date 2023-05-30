const Frame = require('./frame');

const frame = new Frame(5,2)

console.log(frame.getFrame());
console.log(frame.sumFrame());
console.log(frame.isSpare());
console.log(frame.isStrike());