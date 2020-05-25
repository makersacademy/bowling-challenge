'use strict';

describe('Game', function() {
  var game;
  var frame0;
  var frame1;
  var frame2;

  beforeEach(function() {
    game = new Game();
    frame0 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame1 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame2 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
  })

  it('stores frames in the game', function() {
    expect(game.getFrames()).toEqual([]);
  })

  describe('#getFrame', function() {
    it('gets a new frame', function() {
      game.getFrame(frame0);
      expect(game.getFrames()).toEqual([frame0]);
    })
  })

  describe('#calculateGameScore', function() {
    it('calculates game score', function() {
      frame0.getIndex.and.returnValue(0);
      frame0.roll.and.returnValue(5, 2);
      frame0.calculatePins.and.returnValue(7)
      game.getFrame(frame0);
      expect(game.calculateGameScore()).toEqual(7);
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
    xit('returns pins of next roll if spare', function() {
      frame.hasSpare.and.returnValue(true);
      expect(game.calculateBonusForPreviousFrame()).toEqual(5);
    })
    xit('returns pins of next two rolls if strike', function() {
      frame.hasStrike.and.returnValue(true);
      expect(game.calculateBonusForPreviousFrame()).toEqual(10)
    })
  })
})
