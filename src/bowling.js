'use strict';

function Scorecard(){
  this.total = 0;
  this._scoreArray = [];
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
