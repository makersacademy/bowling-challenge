'use strict';

var _GAME_OVER = "You are all out of balls"
var _PIN_ERROR = "I think you might want to check those figures again...";
var _MAX_PINS = 10

function Scorecard(){
  this.score = 0;
  this.frameList = [];
  this.firstBall = true;
  this.gameOver = false;
  this.tenPins = false;
  this.addNextBall = false;
  this.extraBall = false;
}

  Scorecard.prototype.ball = function(pins){
    this.checkGameOver();
    this.checkPinEntry(pins);
    this.checkSecondBall(pins);
    this.checkTenPins(pins);
    this.endRoll(pins);
  }

  Scorecard.prototype.endRoll = function(pins) {
    this.frameList.push(pins);
    this.addPoints(pins);
    this.checkTenthFrame();
    this.changeNextBall();
  }


  Scorecard.prototype.checkPinEntry = function(pins){
    if ((pins > _MAX_PINS || pins < 0) || (isNaN(pins))) {
      throw new Error(_PIN_ERROR);
    }
  }

  Scorecard.prototype.checkSecondBall = function(pins) {
    if (!this.firstBall && !this.extraBall && (pins + this.frameList[this.frameList.length -1] > _MAX_PINS)) {
      throw new Error(_PIN_ERROR);
    }
  }

  Scorecard.prototype.checkGameOver = function(){
    if (this.gameOver) {
      throw new Error(_GAME_OVER)
    }
  }

  Scorecard.prototype.checkTenPins = function(pins){
    if ((this.firstBall && pins === _MAX_PINS) || (!this.firstBall && pins + this.frameList[this.frameList.length -1] === _MAX_PINS)) {
      this.tenPins = true;
    }
  }

  Scorecard.prototype.changeNextBall = function(){
    this.firstBall = !this.firstBall;
  }

  Scorecard.prototype.addPoints = function(pins){
    this.score += pins;
    if (this.addNextBall){this.score += pins;}
    this.resetBonus();
  }

  Scorecard.prototype.resetBonus = function(){
    if (this.frameList[18] === 10 ) {
      this.addNextBall = true;
    } else if (this.tenPins && this.firstBall && !this.extraBall) {
      this.addNextBall = true;
      this.frameList.push(0);
      this.changeNextBall();
    } else if (this.tenPins) {
      this.addNextBall = true;
      this.tenPins = false;
    } else {
      this.addNextBall = false
    }
  }

  Scorecard.prototype.checkTenthFrame = function(){
    if (this.frameList.length === 21) {
      this.runGameover();
    } else if (this.frameList[18] === 10 || this.frameList.length >= 20) {
        this.tenthFrame();
    }
  }

  Scorecard.prototype.tenthFrame = function(){
    this.checkBonusTenthFrame();
    if (this.frameList.length >= 20 && !this.extraBall) {
      this.runGameover();
    }
  }

  Scorecard.prototype.runGameover = function(){
    this.gameOver = true;
    this.checkMegaFail();
  }

  Scorecard.prototype.checkMegaFail = function(){
    if (this.score === 0) {
      this.score += 20
    }
  }

  Scorecard.prototype.checkBonusTenthFrame = function(){
    if (this.addNextBall) {
      this.extraBall = true
    } else {
      this.extraBall = false
    }
  }
