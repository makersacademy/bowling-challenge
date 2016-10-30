if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    'use strict';
    if (this === null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }

    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
        (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
          return true;
        }
        k++;
      }
      return false;
    };
  }

  function Bowling () {
    this.score = 0;
    this.framesList = [];
    this.counter = 0;
    this.strike = 10;
  }

  var bonus = 0

  Bowling.prototype.play = function (roll1, roll2, roll3 ) {
    roll2 = roll2 || 0; roll3 = roll3 || 0;
    var frame = [(roll1 + roll2 + roll3), roll1, roll2, roll3]
    if (this.counter < 10) {
      this.framesList.push(frame)
      this.score += frame[0];
      this.counter += 1;
      this.calculate (frame);
    }
  };

  Bowling.prototype.strik = function (frame) {
    if ((this.counter < 10) &&
    (this.framesList[this.framesList.indexOf(frame) - 2][1] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 2][0] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 1][1] !== this.strike)){
      bonus = this.framesList[this.framesList.indexOf(frame) - 1][1] +
      this.framesList[this.framesList.indexOf(frame) - 1][2];
      this.framesList[this.framesList.indexOf(frame) - 2][0] += bonus;
      this.score += bonus;
    }
    else if ((this.counter === 10) &&
    (this.framesList[this.framesList.indexOf(frame) - 1][1] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 1][0] === this.strike)){
      bonus = frame[1] + frame[2];
      this.framesList[this.framesList.indexOf(frame) - 1][0] += bonus;
      this.score += bonus;
    }
  };

  Bowling.prototype.doublestrike = function (frame) {
    if ((this.framesList[this.framesList.indexOf(frame) - 2][1] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 2][0] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 1][1] === this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 1][0] === this.strike)){
      bonus = this.strike * 2
      this.framesList[this.framesList.indexOf(frame) - 2][0] += bonus;
      this.score += bonus;
    }
  };

  Bowling.prototype.spare = function (frame) {
    if ((this.framesList[this.framesList.indexOf(frame) - 2][1] !== this.strike)&&
    (this.framesList[this.framesList.indexOf(frame) - 2][0] === this.strike)){
      bonus = this.framesList[this.framesList.indexOf(frame) - 1][1]
      this.framesList[this.framesList.indexOf(frame) - 2][0] += bonus;
      this.score += bonus;
    }
  };

  Bowling.prototype.calculate = function (frame) {
    if
    (this.framesList.includes(this.framesList[this.framesList.indexOf(frame)-2])){
      this.doublestrike(frame);
      this.strik(frame);
      this.spare(frame);
    }
  };

  //
  // Bowling.prototype.scoreUpdate = function (bonus) {
  //   this.score += bonus;
  // };
