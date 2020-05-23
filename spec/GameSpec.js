'use strict';

describe('Game', function() {
  var game;
  var frame;
  var frame2;
  var frame3;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame2 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame3 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
  })

  it('stores frames in the game', function() {
    expect(game.getFrames()).toEqual([]);
  })

  describe('#getFrame', function() {
    it('gets a new frame', function() {
      game.getFrame(frame);
      expect(game.getFrames()).toEqual([frame]);
    })
  })

  describe('#calculateGameScore', function() {
    it('calculates game score', function() {
      frame.getIndex.and.returnValue(0);
      frame.roll.and.returnValue(5);
      frame.roll.and.returnValue(5);
      frame.calculatePins.and.returnValue(10)
      game.getFrame(frame);
      expect(game.calculateGameScore()).toEqual(10);
    })
  })

  describe('#calculateBonusForPreviousFrame', function() {
    beforeEach(function() {
      frame.getIndex.and.returnValue(0);
      frame2.getIndex.and.returnValue(1);
      frame2.roll.and.returnValue(5);
      frame3.getIndex.and.returnValue(2);
      frame3.roll.and.returnValue(5);
      game.getFrame(frame);
      game.getFrame(frame2);
    })
    it('returns pins of next roll if spare', function() {
      frame.hasSpare.and.returnValue(true);
      expect(game.calculateBonusForPreviousFrame()).toEqual(5);
    })
    it('returns pins of next two rolls if strike', function() {
      frame.hasStrike.and.returnValue(true);
      expect(game.calculateBonusForPreviousFrame()).toEqual(10)
    })
  })
})
