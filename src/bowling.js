'use strict';

function Scorecard(){
  this.total = 0;
  this._scoreArray = [];
  this.resultOne = 0;
  this.resultTwo = 0;
  this.resultThree = 0;
  this.resultFour = 0;
  this.resultFive = 0;
  this.resultSix = 0;
  this.resultSeven = 0;
  this.resultEight = 0;
  this.resultNine = 0;
  this.resultTine = 0;
}

Scorecard.prototype.seeArray = function (){
  return this._scoreArray;
};

Scorecard.prototype.addZero = function () {
  this.total +=0;
  this._scoreArray.push(0);
};

Scorecard.prototype.addOne = function () {
  this.total +=1;
  this._scoreArray.push(1);
};

Scorecard.prototype.addTwo = function () {
  this.total +=2;
  this._scoreArray.push(2);
};

Scorecard.prototype.addThree = function () {
  this.total +=3;
  this._scoreArray.push(3);
};

Scorecard.prototype.addFour = function () {
  this.total +=4;
  this._scoreArray.push(4);
};

Scorecard.prototype.addFive = function () {
  this.total +=5;
  this._scoreArray.push(5);
};

Scorecard.prototype.addSix = function () {
  this.total +=6;
  this._scoreArray.push(6);
};

Scorecard.prototype.addSeven = function () {
  this.total +=7;
  this._scoreArray.push(7);
};

Scorecard.prototype.addEight = function () {
  this.total +=8;
  this._scoreArray.push(8);
};

Scorecard.prototype.addNine = function () {
  this.total +=9;
  this._scoreArray.push(9);
};

Scorecard.prototype.addTen = function () {
  this.total +=10;
  this._scoreArray.push(10);
};

Scorecard.prototype.frameOne = function () {
  this.resultOne = this._scoreArray[0]+this._scoreArray[1];
  return this.resultOne;
};

Scorecard.prototype.frameTwo = function () {
  this.resultTwo = this._scoreArray[2]+this._scoreArray[3]+this.resultOne;
  return this.resultTwo;
};

Scorecard.prototype.frameThree = function () {
  this.resultThree = this._scoreArray[4]+this._scoreArray[5]+ this.resultTwo;
  return this.resultThree;
};

Scorecard.prototype.frameFour = function () {
  this.resultFour = this._scoreArray[6]+this._scoreArray[7]+this.resultThree;
  return this.resultFour;
};

Scorecard.prototype.frameFive = function () {
  this.resultFive = this._scoreArray[8]+this._scoreArray[9]+this.resultFour;
  return this.resultFive;
};

Scorecard.prototype.frameSix = function () {
  this.resultSix = this._scoreArray[10]+this._scoreArray[11]+this.resultFive;
  return this.resultSix;
};

Scorecard.prototype.frameSeven = function () {
  this.resultSeven = this._scoreArray[12]+this._scoreArray[13]+this.resultSix;
  return this.resultSeven;
};

Scorecard.prototype.frameEight = function () {
  this.resultEight = this._scoreArray[14]+this._scoreArray[15]+this.resultSeven;
  return this.resultEight;
};

Scorecard.prototype.frameNine = function () {
  this.resultNine = this._scoreArray[16]+this._scoreArray[17]+this.resultEight;
  return this.resultNine;
};

Scorecard.prototype.frameTen = function () {
  this.resultTen = this._scoreArray[18]+this._scoreArray[19]+this.resultNine;
  return this.resultTen;
};
