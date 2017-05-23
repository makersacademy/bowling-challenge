(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Frame = require('../src/Frame');

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  describe('frameNo variable', function() {
    it('Can be assigned a frame number but has a default value of 1 if not assigned', function() {
      expect(frame.frameNo).toEqual(1);
    });

    it('equals 2 if assigned a value of 2 upon instantion', function() {
      frame = new Frame(2);
      expect(frame.frameNo).toEqual(2);
    });
  });

  describe('Roll', function() {
    it('stores the number of pins knocked down on each roll in an array', function() {
      frame.Roll(3);
      expect(frame.pinsKnockedDown[0]).toEqual(3);
    });

    it('only stores 2 throws', function() {
      frame.Roll(2);
      frame.Roll(5);
      frame.Roll(3);
      expect(frame.pinsKnockedDown).toEqual([2,5]);
    });

    it('only allows a total of 10 pins to be entered over 2 rolls', function() {
      frame.Roll(9);
      expect( function() {
        frame.Roll(5);}).toThrowError('You cannot enter more than a total of 10 over 2 rolls');
    });

    it("if a strike is scored, the 2nd roll will automatically be stored as zero so that player's do not have to manually enter this", function() {
      frame.Roll(10);
      expect(frame.pinsKnockedDown[1]).toEqual(0);
    });

    describe('will only allow a 3rd roll if it is the tenth frame and the player has already rolled a strike or a spare',
      function() {
      beforeEach( function() {
        frame.frameNo = 10;
      });

      it('If I roll a strike and another strike it will store 10, 10, 10 in the array pinsKnockedDown', function() {
        frame.Roll(10);
        frame.Roll(10);
        frame.Roll(10);
        expect(frame.pinsKnockedDown).toEqual([10, 10, 10]);
      });

      it('If I roll a spare on my 1st two rolls I will get a 3rd roll e.g. 3, 7, 5, will be stored in the array',
      function() {
        frame.Roll(3);
        frame.Roll(7);
        frame.Roll(5);
        expect(frame.pinsKnockedDown).toEqual([3, 7, 5]);
      });

      it("If a spare or a strike isn't bowled it will not store a third bowl", function() {
        frame.Roll(4);
        frame.Roll(3);
        expect(function() {
          frame.Roll(5);
        }).toThrowError("Sorry you don't get a 3rd bowl");
        expect(frame.pinsKnockedDown).toEqual([4, 3]);
      });
    });
  });

  describe('checkRoll', function() {
    it('will not accept a number higher than 10 or below 0', function() {
      expect(function() {
        frame.checkRoll(11);
      }).toThrowError('The number entered must be between 0 - 10');
      expect(function() {
        frame.checkRoll(-1);
      }).toThrowError('The number entered must be between 0 - 10');
    });
  });

  describe('bonus', function() {
    it('has a default value of false upon instantiation', function() {
      expect(frame.bonus).toBe(false);
    });

    it("gets set to 'Strike' when a strike is bowled", function() {
      frame.Roll(10);
      expect(frame.bonus).toBe('Strike');
    })
  })

});

},{"../src/Frame":2}],2:[function(require,module,exports){


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
  } else if (num === this.MAX_PINS && this.pinsKnockedDown.length < 1 && this.frameNo !== this.FINAL_FRAME){
    this.pinsKnockedDown.push(num);
    return 0;
  } else {
    return num;
  }
};

Frame.prototype.check2ndRoll = function(num) {
  if (this.pinsKnockedDown[0] + this.checkRoll(num) > this.MAX_PINS && this.frameNo !== this.FINAL_FRAME) {
    throw new RangeError('You cannot enter more than a total of ' + this.MAX_PINS + ' over 2 rolls');
  } else {
    return num;
  }
};

Frame.prototype.check3rdRoll = function(num) {
  sum = this.pinsKnockedDown[0] + this.pinsKnockedDown[1];
  if (sum === this.MAX_PINS || sum === this.MAX_PINS * 2 ) {
    return this.checkRoll(num);
  } else {
    throw new Error("Sorry you don't get a 3rd bowl");
  }
};

module.exports = Frame;

},{}]},{},[1]);
