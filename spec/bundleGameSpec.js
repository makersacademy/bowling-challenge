(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],2:[function(require,module,exports){
var Game = require('../src/game.js');

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a default player name of Player 1 if no name is given', function() {
    expect(game.playerName).toBe('Player 1');
  });

  it('stores the player name if one is specified', function() {
    game = new Game('Simon');
    expect(game.playerName).toBe('Simon');
  });

  it('keeps track of the frame number and starts with 0', function() {
    expect(game.currentFrame).toEqual(0);
  });

  it('has an array for storing frames', function() {
    expect(game.frames).toEqual({});
  });

  describe('newFrame', function() {
    it('updates the frame number each time a new frame is started', function() {
      game.newFrame();
      expect(game.currentFrame).toEqual(1);
      game.newFrame();
      expect(game.currentFrame).toEqual(2);
      for (i=1; i<=5; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(7);
    });

    it('will not allow more than 10 frames in a game', function() {
      for (i=1; i<=20; i++) {
        game.newFrame();
      }
      expect(game.currentFrame).toEqual(10);
    });
  });

  describe('addScore', function() {
    it('takes the no. of pins knocked over and saves it to the current frame', function() {
      game.newFrame();
      game.addScore(8);
      expect(game.frames['frame 1'].pinsKnockedDown).toContain(8);
    });
  });

});

},{"../src/game.js":4}],3:[function(require,module,exports){


function Frame(FrameNo) {
  if ( typeof FrameNo === 'undefined') {
    this.frameNo = 1;
  } else {
    this.frameNo = FrameNo;
  }
  this.pinsKnockedDown = [];
  this.MIN_PINS = 0;
  this.MAX_PINS = 10;
  this.FINAL_FRAME = 10;
}

Frame.prototype.Roll = function(pins) {
  if (this.pinsKnockedDown.length === 0) {
    this.pinsKnockedDown.push(this.checkRoll(pins));
  } else if (this.pinsKnockedDown.length === 1){
    this.pinsKnockedDown.push(this.check2ndRoll(pins));
  } else if (this.pinsKnockedDown.length === 2 && this.frameNo === this.FINAL_FRAME) {
    this.pinsKnockedDown.push(this.check3rdRoll(pins));
  }
};

Frame.prototype.checkRoll = function(num) {
  if (num < this.MIN_PINS || num > this.MAX_PINS) {
    throw new RangeError('The number entered must be between ' + this.MIN_PINS + ' - ' + this.MAX_PINS);
  } else if (num === this.MAX_PINS && this.pinsKnockedDown.length < 1){
    this.pinsKnockedDown.push(num);
    return 0;
  } else {
    return num;
  }
};

Frame.prototype.check2ndRoll = function(num) {
  if (this.pinsKnockedDown[0] + this.checkRoll(num) > this.MAX_PINS) {
    throw new RangeError('You cannot enter more than a total of ' + this.MAX_PINS + ' over 2 rolls');
  } else {
    return num;
  }
};

Frame.prototype.check3rdRoll = function(num) {
  sum = this.pinsKnockedDown[0] + this.pinsKnockedDown[1];
  if (sum === this.MAX_PINS) {
    return this.checkRoll(num);
  } else {
    throw new Error("Sorry you don't get a 3rd bowl");
  }
};

module.exports = Frame;

},{}],4:[function(require,module,exports){
var Frame = require("./Frame.js");

var uniq = require('uniq');

function Game(player_name) {
  if (typeof player_name === 'undefined') {
    this.playerName = 'Player 1';
  } else {
    this.playerName = player_name;
  }

  this.currentFrame = 0;
  this.frames = {};

}

Game.prototype.newFrame = function() {
  if (this.currentFrame < 10) {
    this.currentFrame ++;
    var frame = new Frame(this.currentFrame);
    this.frames['frame ' + this.currentFrame] = frame;
  }

};

Game.prototype.addScore = function(num) {
  this.frames['frame ' + this.currentFrame].Roll(num);
};

module.exports = Game;

},{"./Frame.js":3,"uniq":1}]},{},[2]);
