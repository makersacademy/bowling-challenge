'use strict';

function Frame() {
  this.score = [];
};

Frame.prototype.pins = function (num) {
  this.score.push(num);
};

Frame.prototype.getScore = function () {
  return this.score;
}

Frame.prototype.sum = function() {
  var tot = (this.score[0])+(this.score[1]);
  return tot;
}


// function frameOneToNine() {
//   var running_tally = []
//   running_tally.push(document.getElementById("r"));
//   var r1 = running_tally[0];
//   var r2 = running_tally[1];
//   var r3 = running_tally[2];
//   var f;
//
//   if (r1 != 10 && r1 + r2 != 10) {
//     f = r1 + r2
//   } else {
//     f = r1 + r2 + r3
//   }
// }



// function frameTen() {
//     var r1 = document.getElementById("r1");
//     var r2 = document.getElementById("r2");
//     var r3 = document.getElementById("r3");
//     var f10;
//     if (r1 + r2 >= 10) {
//       f10 = r1 + r2 + r3;
//     } else {
//       f10 = r1 + r2
//     }
// }
// running_tally.push(document.getElementById("r"));
