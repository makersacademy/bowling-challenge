describe('Game', () => {
  let game;
  let doubleStrikeFrames;
  let spareFrame;
  let strikeFrame;
  let strike;
  let spare;
  let nine;

  beforeEach(() => {
    game = new Game();
    doubleStrikeFrames = [[10, 10], [10], [10]];
    spareFrame = [[8, 2], [5, 2]];
    strikeFrame = [[10], [8, 2]];
    strike = [10];
    spare = [8, 2];
    nine = [8, 1];
  });

  describe('The .addBonuses function', () => {
    it('adds bonuses to doubleStrikeFrames', () => {
      game.frames = doubleStrikeFrames;
      expect(game.addBonuses())
        .toEqual([[10, 10, 10], [10, 10], [10]]);
    });

    it('adds bonuses to strikeFrames', () => {
      game.frames = strikeFrame;
      expect(game.addBonuses()).toEqual([[10, 8, 2], [8, 2]]);
    });

    it('adds bonuses to spareFrames', () => {
      game.frames = spareFrame;
      expect(game.addBonuses(spareFrame)).toEqual([[8, 2, 5], [5, 2]]);
    });
  });

  describe('The flattenAndSum function', () => {
    it('flattens an array and returns the sum', () => {
      expect(game.flattenAndSum(doubleStrikeFrames)).toEqual(40);
    });
  });

  describe('The isFrameTen function', () => {
    it('returns true for frame ten', () => {
      game.frames = [[], [], [], [], [], [], [], [], [], []];
      expect(game.isFrameTen()).toEqual(true);
    });

    it('returns false for frame nine', () => {
      game.frames = [[], [], [], [], [], [], [], [], []];
      expect(game.isFrameTen()).toEqual(false);
    });
  });

  describe('The addRollToFrame function', () => {
    it('creates an array for the current frame', () => {
      game.frames = [];
      game.completedFramesCount = 0;
      game.roll = 2;
      expect(game.addRollToFrame()).toEqual([[2]]);
    });

    it('adds the second roll to a frame', () => {
      game.frames = [[2]];
      game.completedFramesCount = 0;
      game.roll = 2;
      expect(game.addRollToFrame()).toEqual([[2, 2]]);
    });

    it('adds a third roll to the tenth frame', () => {
      game.frames = [[], [], [], [], [], [], [], [], [], [8, 2]];
      game.completedFramesCount = 9;
      game.roll = 2;
      expect(game.addRollToFrame()).toEqual([[], [], [], [], [], [], [], [], [], [8, 2, 2]]);
    });
  });

  describe('The checkCompleteFrame function', () => {
    it('increments completedFramesCount if the frame is complete', () => {
      game.frames = [spare];
      game.checkFrameComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('won\'t increment completedFramesCount if the frame is not complete', () => {
      game.frames = [[8]];
      game.checkFrameComplete();
      expect(game.completedFramesCount).toEqual(0);
    });
  });

  describe('The checkFrameTenComplete function', () => {
    it('increments completedFramesCount if the strike frame is complete', () => {
      game.frames = [[10, 8, 2]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('increments completedFramesCount if the no strike frame is complete', () => {
      game.frames = [[8, 1]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(1);
    });

    it('won\'t increment completedFramesCount if the frame is not complete', () => {
      game.frames = [[10, 10]];
      game.checkFrameTenComplete();
      expect(game.completedFramesCount).toEqual(0);
    });
  });

  describe('The isStrike function', () => {
    it('returns true if the frame is a strike', () => {
      expect(game.isStrike(strike)).toEqual(true);
    });

    it('returns false if the frame is a spare', () => {
      expect(game.isStrike(spare)).toEqual(false);
    });

    it('returns false if the frame is neither', () => {
      expect(game.isStrike(nine)).toEqual(false);
    });
  });

  describe('The isSpare function', () => {
    it('returns true if the frame is a spare', () => {
      expect(game.isSpare([8, 2])).toEqual(true);
    });

    it('returns false if the frame is a strike', () => {
      expect(game.isSpare([10])).toEqual(false);
    });

    it('returns false if the frame is neither', () => {
      expect(game.isSpare([8, 1])).toEqual(false);
    });
  });

  describe('The isNeither function', () => {
    it('returns false if the frame is a spare', () => {
      expect(game.isNeither([8, 2])).toEqual(false);
    });

    it('returns false if the frame is a strike', () => {
      expect(game.isNeither([10])).toEqual(false);
    });

    it('returns true if the frame is neither', () => {
      expect(game.isNeither([8, 1])).toEqual(true);
    });
  });

  describe('The hasAllBonuses function', () => {
    it('returns true if the frame has all bonuses', () => {
      expect(game.hasAllBonuses([8, 2, 10])).toEqual(true);
    });

    it('returns false if the frame doesn\'t have all bonuses', () => {
      expect(game.hasAllBonuses([10, 8])).toEqual(false);
    });

    it('returns true for a neither frame', () => {
      expect(game.hasAllBonuses([7, 2])).toEqual(true);
    });
  });

  describe('The getRemainingPins function', () => {
    it('returns the remaining pins if roll one is not a strike', () => {
      game.getRemainingPins([8]);
      expect(game.remainingPins).toEqual(ALL_PINS - 8);
    });

    it('returns ten for a strike frame', () => {
      game.getRemainingPins(strike);
      expect(game.remainingPins).toEqual(ALL_PINS);
    });

    it('returns ten on roll two', () => {
      game.getRemainingPins(nine);
      expect(game.remainingPins).toEqual(ALL_PINS);
    });

    it('returns ten for a zero roll', () => {
      game.getRemainingPins([0]);
      expect(game.remainingPins).toEqual(ALL_PINS);
    });
  });
});
