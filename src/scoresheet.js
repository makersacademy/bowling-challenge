function Scoresheet() {

  this.rollCounter = 0;
  this.pinsDropped = 0;
  this.scoreArray = [[]];

  this.rollArray = [];
  this.frameCounter = 1;
  this.scoreAfterFrame = 0;

}

Scoresheet.prototype.totalScore = function () {
  var total = 0;
  for (var i = 0; i < this.scoreArray.length; i++) {
    for (var j = 0; j < 2; j++) {
       total += this.scoreArray[i][j];
     }
   }
  return total;
};

// Scoresheet.prototype.frameScore = function () {
//
//
//   return framescore;
// };


Scoresheet.prototype.calculatingScore = function (pinsDropped) {
  this.pinsDropped = pinsDropped;


  if (this.isStrike()) {
    this.scoreArray[this.frameCounter - 1][0] = 'X';
    this.scoreArray[this.frameCounter - 1][1] = '';
    this.rollCounter += 2;

  } else if (this.isSpare()) {
    // console.log('where is this line');
    this.scoreArray[this.frameCounter-1][this.rollCounter] = '/';

  }else {
    this.scoreArray[this.frameCounter-1][this.rollCounter] = this.pinsDropped;
  }

  this.rollCounter += 1;

  if (this.rollCounter === 2) {
    this.rollCounter = 0;
    this.frameCounter += 1;
  }

};


Scoresheet.prototype.isStrike = function () {
  // console.log('inside strike t');
  if (this.rollCounter === 0 && this.pinsDropped === 10) {
    return true;
  }
};

Scoresheet.prototype.isSpare = function () {
  // console.log('inside spare ddd');
  if (this.rollCounter === 1 && (this.scoreArray[this.frameCounter-1][0] + this.pinsDropped) === 10) {
    // console.log('inside spare hello');
    return true;
  }
};


//
// Scoresheet.prototype.scoreCalculated = function (numberOfPins) {
//   //this.scoreAfterFrame += numberOfPins;
//
//   if (this.isStrike()) {
//
//     var frameScore = [];
//     frameScore[0] =
//
//     return true;
//   } else if(this.isSpare()){
//     return true
//   }
// };



// Scoresheet.prototype.farme = function (roll1, roll2) {
//
// };
