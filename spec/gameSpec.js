'use strict';

describe('Game', function() {
  var game, perfectGame, doubleStrikeFrames, spareFrame,
    strikeFrame, strike, spare, nine;

  beforeEach(function(){
    game = new Game();
    perfectGame = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    doubleStrikeFrames = [[10, 10], [10], [10]];
    spareFrame = [[8,2], [5,2]];
    strikeFrame = [[10], [8,2]];
    strike = [10];
    spare = [8, 2];
    nine = [8, 1];
  });

  describe('The .addBonuses function', function() {
    it('adds bonuses to doubleStrikeFrames', function() {
      game.frames = doubleStrikeFrames;
      expect(game.addBonuses())
        .toEqual([[10, 10, 10], [10, 10], [10]]);
    });

    it('adds bonuses to strikeFrames', function() {
      game.frames = strikeFrame;
      expect(game.addBonuses())
        .toEqual([[10, 8, 2], [8, 2]]);
        console.log('Add bonuses to strikeFrame ', game.frames)

    });

    it('adds bonuses to spareFrames', function() {
      game.frames = spareFrame;
      expect(game.addBonuses(spareFrame)).toEqual([[8, 2, 5], [5, 2]]);
      console.log('spareframes : ',game.frames);
    });
  });

  describe('The flattenAndSum function', function() {
    it('flattens an array and returns the sum', function() {
      expect(game.flattenAndSum(doubleStrikeFrames)).toEqual(40);
    });
  });

  describe('The addRollToFrame function', function() {
    it('creates an array for the current frame', function() {
      game.frames = [];
      game.completedFramesCount = 0;
      game.roll = 2;
      expect(game.addRollToFrame()).toEqual([[2]]);
    });

    it('adds the second roll to a frame', function() {
      game.frames = [[2]];
      game.completedFramesCount = 0;
      game.roll = 2;
      expect(game.addRollToFrame()).toEqual([[2, 2]]);
    });

    it('adds a third roll to the tenth frame', function(){
      game.frames = [[],[],[],[],[],[],[],[],[],[8, 2]];
      game.completedFramesCount = 9;
      game.roll = 2;
      expect(game.addRollToFrame())
      .toEqual([[],[],[],[],[],[],[],[],[],[8, 2, 2]]);
    });
  });

  describe('The checkCompleteFrame function', function() {
    it('increments completedFramesCount if the frame is complete', function() {
      game.frames = [spare];
      game.checkFrameComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('won\'t increment completedFramesCount if the frame is not complete', function() {
      game.frames = [[8]];
      game.checkFrameComplete();
      expect(game.completedFramesCount).toEqual(0);
    });
  });

  describe('The checkFrameTenComplete function', function() {
    it('increments completedFramesCount if the strike frame is complete', function() {
      game.frames = [[10, 8, 2]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('increments completedFramesCount if the no strike frame is complete', function() {
      game.frames = [[8, 1]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('won\'t increment completedFramesCount if the frame is not complete', function() {
      game.frames = [[10, 10]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(0);
    });
  });

  describe('The isStrike function', function(){
    it('returns true if the frame is a strike', function() {
      expect(game.isStrike(strike)).toEqual(true);
    });

    it('returns false if the frame is a spare', function() {
      expect(game.isStrike(spare)).toEqual(false);
    });

    it('returns false if the frame is neither', function() {
      expect(game.isStrike(nine)).toEqual(false);
    });
  });

  describe('The isSpare function', function(){
    it('returns true if the frame is a spare', function() {
      expect(game.isSpare([8, 2])).toEqual(true);
    });

    it('returns false if the frame is a strike', function() {
      expect(game.isSpare([10])).toEqual(false);
    });

    it('returns false if the frame is neither', function() {
      expect(game.isSpare([8, 1])).toEqual(false);
    });
  });

  describe('The isNeither function', function(){
    it('returns false if the frame is a spare', function() {
      expect(game.isNeither([8, 2])).toEqual(false);
    });

    it('returns false if the frame is a strike', function() {
      expect(game.isNeither([10])).toEqual(false);
    });

    it('returns true if the frame is neither', function() {
      expect(game.isNeither([8, 1])).toEqual(true);
    });
  });

  describe('The hasAllBonuses function', function(){
    it('returns true if the frame has all bonuses', function() {
      expect(game.hasAllBonuses([8, 2, 10])).toEqual(true);
    });

    it('returns false if the frame doesn\'t have all bonuses', function() {
      expect(game.hasAllBonuses([10, 8])).toEqual(false);
    });

    it('returns true for a neither frame', function() {
      expect(game.hasAllBonuses([7,2])).toEqual(true);
    });
  });

  describe('The getRemainingPins function', function() {
    it('returns the remaining pins if roll one is not a strike', function() {
      game.getRemainingPins([8]);
      expect(game.remainingPins).toEqual(ALL_PINS - 8);
    });

    it('returns ten for a strike frame', function() {
      game.getRemainingPins(strike);
      expect(game.remainingPins).toEqual(ALL_PINS);
    });

    it('returns ten on roll two', function() {
      game.getRemainingPins(nine)
      expect(game.remainingPins).toEqual(ALL_PINS);
    });

    it('returns ten for a zero roll', function() {
      game.getRemainingPins([0]);
      expect(game.remainingPins).toEqual(ALL_PINS);
    });
  });
});
