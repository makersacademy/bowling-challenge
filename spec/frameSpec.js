'use strict';
var Frame = require('../lib/frame');

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts empty', function(){
    expect(frame.rolls).toBeEmptyArray();
  });

  describe('#addRoll', function(){

    it('can save the score for the first roll', function(){
      frame.addRoll(5);
      expect(frame.rolls).toEqual([5]);
    });

    it('can save the score for the second roll', function(){
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.rolls).toEqual([5, 3]);
    });

    it('can save only 2 rolls', function(){
      frame.addRoll(5);
      frame.addRoll(4);
      frame.addRoll(1);
      expect(frame.rolls).toEqual([5, 4]);
    });
  });

  describe('#isStrike', function(){
    it('returns true if first roll is a strike', function(){
      frame.rolls[0] = 10;
      expect(frame.isStrike()).toBeTrue();
    });
  });

  describe('#isSpare', function(){
    it('returns true if the second roll results in a spare', function(){
      frame.rolls[0] = 5;
      frame.rolls[1] = 5;
      expect(frame.isSpare()).toBeTrue();
    });
  });

  describe('#isComplete', function(){
    it('returns true after 2 rolls', function(){
      frame.addRoll(2);
      frame.addRoll(5);
      expect(frame.isComplete()).toBeTrue();
    });

    it('returns true after maximum score of 10 is reached', function(){
      frame.addRoll(4);
      frame.addRoll(6);
      expect(frame.isComplete()).toBeTrue();
    });

    it('returns true when first roll is strike', function(){
      frame.addRoll(10);
      expect(frame.isComplete()).toBeTrue();
    });
  });

  describe('#score', function(){
    it('can calculate the total score of the frame', function(){
      frame.addRoll(1);
      frame.addRoll(7);
      expect(frame.score()).toEqual(8);
    });
  });

});
