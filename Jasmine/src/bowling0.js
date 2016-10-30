function Bowling () {
  this.score = 0;
  this.framesList = [];
  this.counter = 0;
}
//
// Bowling.prototype.strik = function(frame) {
//   if this.framesList.length > 2
//   this.framesList[this.framesList.length-1] +=
// }
//
// Bowling.prototype.spare = function (frame) {
//   if (this.framesList[this.framesList.length-2][2] === 10) {
//     this.framesList[this.framesList.length - 2][2] +=
//     this.framesList[this.framesList.length - 1][0];
//   }
// }

Bowling.prototype.play = function (roll1, roll2 = 0, roll3 = 0) {
if ((this.counter < 9) && (roll1 !== 10)) {
  this.framesList.push([roll1, roll2])
  this.counter += 1

}
else if ((this.counter < 9) && (roll1 === 10)) {
  this.framesList.push([roll1])
  this.counter += 1

}
this.play2 ()
}
Bowling.prototype.play2 = function (roll1, roll2 = 0, roll3 = 0) {
  if ((this.counter  === 9)  && (roll1 === 10)){
  this.framesList.push([roll1, roll2 , roll3])
  this.counter += 1
  this.calculate ()
}
else if ((this.counter  === 9) && (roll1 !== 10)) {
this.framesList.push([roll1,roll2])
this.counter += 1
this.calculate ()
}
}

Bowling.prototype.calculate = function () {
this.framesList.forEach(function(element) {
  if (element.length === 1) {
     element[0] += (this.framesList[this.framesList.indexOf(element) + 1] +
    this.framesList[this.framesList.indexOf(element) + 1])
  }
  else if ((element.length === 2) && (element[0] + element[1] !== 10)){
    element[0] += element[1]
    element.pop()
  }

  this.calculate2 (this.framesList);
});
}

  Bowling.prototype.calculate2 = function (framesList) {
  framesList.forEach(function(frame) {
  if ((frame.length === 2) && (frame[0] + frame[1] === 10)){
    frame[0] += (frame[1] +
      (this.framesList[this.framesList.indexOf(frame) + 1][0]));
    frame.pop()
  }
  else if (frame.length === 3){
    frame[0] += (frame[1] + frame [2])
    frame.splice(-2, 2)
  }
})
  this.arrSum(this.framesList)
};

Bowling.prototype.arrSum = function (framesCount) {
  var sum = 0;
  for (var i = 0; i < framesCount.length; i++) {
    if (typeof framesCount[i] === 'object')
      {sum += this.arrSum(framesCount[i])}
    else
      {sum += framesCount[i]}
  }
  this.counter = sum
}
//
// else if ((this.framesList.length < 9) && (roll1 !== 10)) {
//   frame = [roll1, roll2, (roll1 + roll2)]
//   this.framesList.push(frame)
//   this.updateScore(frame)
// }
// else if (this.framesList.length === 9){this.lastPlay(roll1, roll2, roll3)}
// };
//
// Bowling.prototype.lastPlay = function (roll1, roll2, roll3) {
//   var frame = []
//   if ((roll1 === 10) || (roll1 + roll2 === 10)) {
//     frame = [roll1, roll2, (roll1 + roll2 + roll3), roll3]
//     this.framesList.push(frame)
//   }
//   else {
//     frame = [roll1, roll2, (roll1 + roll2)]
//     this.framesList.push(frame)
//   }
//   this.updateScore (frame)
//   this.finalScore = this.framesList[this.framesList.length-1][2];
// }
//
//
// Bowling.prototype.updateScore = function (frame) {
//   if (this.framesList.length > 1) {
//     this.strik (frame);
//     this.spare (frame);
//     this.framesList[this.framesList.length-1][2] +=
//     this.framesList[this.framesList.length-2][2];
//   }
