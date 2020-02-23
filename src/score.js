function Score() {
  this.total = 0;
};

Score.prototype.findScore = function(results) {
  this.total = results.reduce(addArray, 0);
}

function add(total, num) {
  return total + num;
}

function addArray(total, nextElement) {
  return total + nextElement.reduce(add);
}

// Score.prototype.findScore = function(results) {
//   numFrames = results.length;
//   ans = 0;
//   for(i = 0; i < numFrames; i++) {
//     if (results[i] === 10 && results[i].length) {
//       if (results[i+1].length === 2) {
//         ans +=
//       }
//     }
//   }
//
// }
