function Score() {
  this.total = 0;
};

Score.prototype.findScore = function(results) {
  frames = results.slice(0, 10);
  this.total = frames.reduce(addArray, 0);
}

// Score.prototype.findBonus = function(results) {
//   frames = results.slice(0, 10);
//   bonus = 0
//   for(i = 0; i < frames.length; i++){
//     if (frames[i].reduce(add) === 10 && frames[i].length === 1) {
//       bonus += frames[i+1].concat(frames[i+2]).flat().slice(0, 3).reduce(add)
//     }
//     else if (frames[i].reduce(add) === 10){
//       bonus += frames[i][0]
//     };
//   };
//   return bonus;
// }

function add(total, num) {
  return total + num;
}

function addArray(total, nextElement) {
  return total + nextElement.reduce(add);
}
