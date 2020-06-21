'use strict';

describe('Frame class', function(){
  var frame;
  var game;
  var spare;
  var strike;
  beforeEach(function(){
    frame = new Frame ();
    game = jasmine.createSpyObj('game', ['sharingInfoAboutFrames'])
    spare = new Frame ();
    spare.firstRoll(6);
    spare.secondRoll(4);
    strike = new Frame();
    strike.firstRoll(10);
  });
  it('when created has 2 properties - roll1,roll2 - equal to null and 2 methods for visualizing them', function(){
    expect(frame.pointsFirstRoll()).toEqual(null);
    expect(frame.pointsSecondRoll()).toEqual(null);
  });
  it('has a method to assign points to the first roll', function(){
  frame.firstRoll(5);
  expect(frame.pointsFirstRoll()).toEqual(5);
  });
  it('has a method to assign points to the second roll', function(){
    frame.secondRoll(2);
    expect(frame.pointsSecondRoll()).toEqual(2);
  });
  it('is determining the basic frame total pts, without considering bonus pts', function(){
    frame.firstRoll(3);
    frame.secondRoll(4);
    expect(frame.calculateScore()).toEqual(7);
  });
  describe('possible errors to be raised', function(){
    it('raises error if points given to single roll > 10', function(){
      expect(function(){frame.firstRoll(11);}).toThrowError('invalid amount of points for single roll');
      expect(function(){frame.secondRoll(11);}).toThrowError('invalid amount of points for single roll');
    });
    it('raises error if, with the second roll, the total frame points get greater than 10', function(){
      frame.firstRoll(9);
      expect(function(){frame.secondRoll(2);}).toThrowError('invalid amount of points for single frame');
    });
  });

  describe('strike', function(){
    it('knows if the frame is a strike', function(){
      frame.firstRoll(10);
      expect(frame._isAStrike()).toBe(true);
    });
    it('knows if the frame is NOT a strike', function(){
      frame.firstRoll(2);
      expect(frame._isAStrike()).not.toBe(true);
    });
  });

  describe('spare', function(){
    it('knows if this frame is a spare', function(){
      frame.firstRoll(2);
      frame.secondRoll(8);
      expect(frame._isASpare()).toBe(true);
    });
    it('knows if this frame is NOT a spare', function(){
      frame.firstRoll(0);
      frame.secondRoll(5);
      expect(frame._isASpare()).not.toBe(true);
    });
  });

  describe('calculates its own bonus', function(){
    it('knows how to calculate spare bonus', function(){
      spare.getNextRoll(strike);
      expect(spare.calculateBonus()).toEqual(10);
    });
    it('knows how to calculate strike bonus when next frame is not a strike one', function(){
      strike.getNextRoll(spare);
      strike.getNextNextRoll(spare);
      expect(strike.calculateBonus()).toEqual(10);
    });
    it('knows how to calculate strike bonus when next frame is a strike one and next next frame is a normal one', function(){
      strike.getNextRoll(strike);
      frame.firstRoll(2)
      frame.secondRoll(5)
      strike.getNextNextRoll(frame);
      expect(strike.calculateBonus()).toEqual(12);
    });
    it('knows how to calculate strike bonus when only the next frame is available(ninth frame case)', function(){
      strike.getNextRoll(spare);
      strike.getNextNextRoll(null);
      expect(strike.calculateBonus()).toEqual(10);
    });
    it('knows that if frame is not a spare nor a strike, it has a bonus equal to 0', function(){
      frame.firstRoll(5);
      frame.secondRoll(2);
      expect(frame.calculateBonus()).toEqual(0);
    });
  });
});
