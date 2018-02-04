function Scoresheet() {
  this.rollCounter = 0;
  this.pinsDropped = 0;
  this.scoreArray = [[]];
  this.cumulativeScore = [];
  this.frameCounter = 0;
  this.strike = false;
  this.finalFrameResult = [];

}

Scoresheet.prototype.totalScore = function () {
  var total = 0;
  for (var i = 0; i < this.scoreArray.length - 1; i++) { //minus one as the reset if statement would add an extra array
    for (var j = 0; j < 2; j++) {
       total += this.scoreArray[i][j];
     }
   }
  return total;
};



Scoresheet.prototype.calculatingScore = function (pinsDropped) {
  this.pinsDropped = pinsDropped;
  if (this.isStrike()) {
    this.scoreArray[this.frameCounter][0] = '';
    this.scoreArray[this.frameCounter][1] = 'X';
    this.frameScore(this.frameCounter, pinsDropped);
    this.rollCounter += 1;

  } else if (this.isSpare()) {
    this.scoreArray[this.frameCounter][this.rollCounter] = '/';
    this.frameScore(this.frameCounter, pinsDropped);

  }else {
    this.scoreArray[this.frameCounter][this.rollCounter] = this.pinsDropped;
    this.frameScore(this.frameCounter, pinsDropped);


  }

  this.rollCounter += 1;

  if (this.rollCounter === 2) {
    this.rollCounter = 0;
    this.frameCounter += 1;
    this.scoreArray.push([]);
  }
    this.bonusStrike();
};

Scoresheet.prototype.frameScore = function (index, pinsDropped) {

  if (this.cumulativeScore[index] === void index) {
    this.cumulativeScore.push(pinsDropped);

  } else if (this.cumulativeScore[index] !== void index ) {
    this.cumulativeScore[index]+= pinsDropped;
  }
};


Scoresheet.prototype.isStrike = function () {
  if (this.rollCounter === 0 && this.pinsDropped === 10) {
    return true;
  }
};

Scoresheet.prototype.bonusStrike = function () {

  for (var i = 0; i < this.scoreArray.length - 1; i++) {

    if (this.scoreArray[i][1] === 'X') {
      if (this.scoreArray[i+1][1] === 'X') {
        var number = i + 2 ;
        console.log(this.cumulativeScore[number]);
        var resu = 20 + this.cumulativeScore[number];
        this.finalFrameResult.push(resu);
        console.log(this.finalFrameResult);
      }

    }




  }

};

Scoresheet.prototype.isSpare = function () {
  if (this.rollCounter === 1 && (this.scoreArray[this.frameCounter][0] + this.pinsDropped) === 10) {
    return true;
  }
};
