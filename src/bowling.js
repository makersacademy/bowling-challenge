'use strict';

function Scorecard(){
  this._scoreArray = [];
  this._strikeArray = [];
}

Scorecard.prototype.endGame = function () {
  if(this.resultTen === 0){
    alert('Gutter Game!');
  } else if(this._strikeArray.length === 12) {
    alert('Well done you rolled the perfect game! Your total is 300!!!');
  } else {
    alert('Well done you scored '+this.resultTen);
  };
};

Scorecard.prototype.seeArray = function (){
  return this._scoreArray;
};

Scorecard.prototype.addZero = function () {
  this._scoreArray.push(0);
};

Scorecard.prototype.addOne = function () {
  this._scoreArray.push(1);
};

Scorecard.prototype.addTwo = function () {
  this._scoreArray.push(2);
};

Scorecard.prototype.addThree = function () {
  this._scoreArray.push(3);
};

Scorecard.prototype.addFour = function () {
  this._scoreArray.push(4);
};

Scorecard.prototype.addFive = function () {
  this._scoreArray.push(5);
};

Scorecard.prototype.addSix = function () {
  this._scoreArray.push(6);
};

Scorecard.prototype.addSeven = function () {
  this._scoreArray.push(7);
};

Scorecard.prototype.addEight = function () {
  this._scoreArray.push(8);
};

Scorecard.prototype.addNine = function () {
  this._scoreArray.push(9);
};

Scorecard.prototype.addTen = function () {
  this._scoreArray.push(10);
  this._strikeArray.push('strike');
};

Scorecard.prototype.frameOne = function () {
  this.resultOne = this._scoreArray[0]+this._scoreArray[1];
  return this.resultOne;
};

Scorecard.prototype.frameTwo = function () {
  this.resultTwo = this._scoreArray[2]+this._scoreArray[3]+ this.resultOne;
  // works out spare
  if(this._scoreArray[0]+this._scoreArray[1]===10){
    this.resultTwo = this.resultTwo + this._scoreArray[2];
    // works out if strike
    if(this._scoreArray[0]===10){
      this.resultTwo = this.resultTwo + this._scoreArray[3]
    }
  }
  // returns total including bonus
  return this.resultTwo;
};

Scorecard.prototype.frameThree = function () {
  this.resultThree = this._scoreArray[4]+this._scoreArray[5]+ this.resultTwo;
  // works out spare
  if(this._scoreArray[2]+this._scoreArray[3]===10){
    this.resultThree = this.resultThree + this._scoreArray[4];
    // works out if strike
    if(this._scoreArray[2]===10){
      this.resultThree = this.resultThree + this._scoreArray[5]
    }
  }
  // returns total including bonus
  return this.resultThree;
};

Scorecard.prototype.frameFour = function () {
  this.resultFour = this._scoreArray[6]+this._scoreArray[7]+this.resultThree;
  // works out spare
  if(this._scoreArray[4]+this._scoreArray[5]===10){
    this.resultFour = this.resultFour + this._scoreArray[6];
    // works out if strike
    if(this._scoreArray[4]===10){
      this.resultFour = this.resultFour + this._scoreArray[7]
    }
  }
  // returns total including bonus
  return this.resultFour;
};

Scorecard.prototype.frameFive = function () {
  this.resultFive = this._scoreArray[8]+this._scoreArray[9]+this.resultFour;
  // works out spare
  if(this._scoreArray[6]+this._scoreArray[7]===10){
    this.resultFive = this.resultFive + this._scoreArray[8];
    // works out if strike
    if(this._scoreArray[6]===10){
      this.resultFive = this.resultFive + this._scoreArray[9]
    }
  }
  // returns total including bonus
  return this.resultFive;
};

Scorecard.prototype.frameSix = function () {
  this.resultSix = this._scoreArray[10]+this._scoreArray[11]+this.resultFive;
  // works out spare
  if(this._scoreArray[8]+this._scoreArray[9]===10){
    this.resultSix = this.resultSix + this._scoreArray[10];
    // works out if strike
    if(this._scoreArray[8]===10){
      this.resultSix = this.resultSix + this._scoreArray[11]
    }
  }
  // returns total including bonus
  return this.resultSix;
};

Scorecard.prototype.frameSeven = function () {
  this.resultSeven = this._scoreArray[12]+this._scoreArray[13]+this.resultSix;
  // works out spare
  if(this._scoreArray[10]+this._scoreArray[11]===10){
    this.resultSeven = this.resultSeven + this._scoreArray[12];
    // works out if strike
    if(this._scoreArray[10]===10){
      this.resultSeven = this.resultSeven + this._scoreArray[13]
    }
  }
  // returns total including bonus
  return this.resultSeven;
};

Scorecard.prototype.frameEight = function () {
  this.resultEight = this._scoreArray[14]+this._scoreArray[15]+this.resultSeven;
  // works out spare
  if(this._scoreArray[12]+this._scoreArray[13]===10){
    this.resultEight = this.resultEight + this._scoreArray[14];
    // works out if strike
    if(this._scoreArray[12]===10){
      this.resultEight = this.resultEight + this._scoreArray[15]
    }

  }
  // returns total including bonus
  return this.resultEight;
};

Scorecard.prototype.frameNine = function () {
  this.resultNine = this._scoreArray[16]+this._scoreArray[17]+this.resultEight;
  // works out spare
  if(this._scoreArray[14]+this._scoreArray[15]===10){
    this.resultNine = this.resultNine + this._scoreArray[15];
    // works out if strike
    if(this._scoreArray[14]===10){
      this.resultNine = this.resultNine + this._scoreArray[17]
    }
  }
  // returns total including bonus
  return this.resultNine;
};

Scorecard.prototype.frameTen = function () {
  this.resultTen = this._scoreArray[18]+this._scoreArray[19]+this.resultNine;
  // works out spare
  if(this._scoreArray[16]+this._scoreArray[17]===10){
    this.resultTen = this.resultTen + this._scoreArray[18];
    // works out if strike
    if(this._scoreArray[16]===10){
      this.resultTen = this.resultTen + this._scoreArray[19]
    }
  }
  if(this._scoreArray[18]+this._scoreArray[19]>=10){
    this.resultTen = this.resultTen + this._scoreArray[20]
  }
  // returns total including bonus
  return this.resultTen;
};
