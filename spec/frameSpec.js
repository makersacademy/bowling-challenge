'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    var knockedPins = 3
    frame = new Frame(knockedPins);
  });

  it('should keep track of how many rolls have been made', function(){
    expect(frame.getRollNumber()).toEqual(1);
  });

  it('should keep track of frame total score', function(){
    expect(frame._score).toEqual(0);
  })

  describe('first roll', function(){

    it('logs the knocked pins of first roll', function(){
      expect(frame.getFirstRoll()).toEqual(3);
    });

    it('logs a strike if knocked pins = 10', function(){
      frame.checkStrike(10);
      expect(frame._isStrike).toBe(true);
    });

    it('throws an error if knocked pins exceed 10', function(){
      expect(function(){ frame.checkStrike(11); }).toThrowError('Cheater. Too many pins.');
    })

  })

  describe('second roll', function(){

    it('logs the knocked pins of second roll', function(){
      frame.playSecondRoll(5);
      expect(frame._secondRoll).toEqual(5);
    });

    it('logs a spare if remaining pins are knocked', function(){
      frame.checkSpare(7);
      expect(frame._isSpare).toBe(true);
    });

    it('throws error if trying to log number higher than number of pins left', function(){
      expect(function(){ frame.checkSpare(10); }).toThrowError('Cheater. Too many pins.');
    });

  });

})
