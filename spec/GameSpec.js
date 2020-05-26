'use strict';

describe('Game', function() {
  var game;
  var frame0;
  var frame1;
  var frame2;
  var frame3;
  var frame4;
  var frame5;
  var frame6;
  var frame7;
  var frame8;
  var frame9;

  beforeEach(function() {
    game = new Game();
    frame0 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame1 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame2 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
    frame0.getIndex.and.returnValue(0);
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
      frame0.roll.and.returnValue(5, 2);
      frame0.calculatePins.and.returnValue(7);
      frame0.score = 7;
      game.getFrame(frame0);
      expect(game.calculateGameScore()).toEqual(7);
    })
  })
  describe('calculateBonus', function() {
    it('gets bonus when it has a spare', function() {
      frame0.roll.and.returnValue(5,5);
      frame0.hasSpare.and.returnValue(true);
      frame0.score = 10;
      game.getFrame(frame0);
      frame1.getIndex.and.returnValue(1);
      frame1.roll.and.returnValue(3,5);
      frame1.firstRoll = 3;
      game.getFrame(frame1);
      expect(game.calculateBonus(frame0)).toEqual(3);
    })
  })
  describe('calculateFrameScore', function() {
    it('calculates frame score', function() {
      frame0.roll.and.returnValue(5, 2);
      frame0.calculatePins.and.returnValue(7);
      frame0.score = 7;
      game.getFrame(frame0);
      expect(game.calculateFrameScore(frame0)).toEqual(7);
    })
  })
  describe('calculateBonusForLast', function() {
    it('calculates bonus for last', function() {
      frame3 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame4 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame5 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame6 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame7 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame8 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      frame9 = jasmine.createSpyObj('frame', ['roll', 'calculatePins', 'hasSpare', 'hasStrike', 'getIndex']);
      game.frames[8] = frame8;
      frame8.hasStrike.and.returnValue(false);
      expect(game.calculateBonusForLast()).toEqual(0);
    })
  })
})
