describe('Frame', function(){
  var frame;

  beforeEach(function() {
    frame = new Frame({rollIndex: 0, frameIndex: 0});
  });

  describe('#addRoll', function() {
    it('can accept rolls', function() {
      frame.addRoll(8);
      expect(frame.pins).toEqual(8);
    });

    it('can accept two rolls and add them', function() {
      frame.addRoll(4);
      frame.addRoll(4);
      expect(frame.pins).toEqual(8);
    });

    it('counts a turn when adding a roll', function() {
      frame.addRoll(8);
      expect(frame.turns).toEqual(1);
    });

    it('counts a second turn when adding a second roll', function() {
      frame.addRoll(8);
      frame.addRoll(1);
      expect(frame.turns).toEqual(2);
    });
  });

  describe('#isFinished', function() {
    it('knows when it is over', function() {
      frame.turns = 2;
      frame.pins = 8;
      expect(frame.isFinished()).toBe(true);
    });

    it('knows when it is over in case of a strike', function() {
      frame.turns = 1;
      frame.pins = 10;
      expect(frame.isFinished()).toBe(true);
    });

    it('knows when a game is not over', function() {
      frame.turns = 1;
      frame.pins = 8;
      expect(frame.isFinished()).toBe(false);
    });
  });

  describe('#isStrike', function() {
    it('knows when it is a strike', function() {
      frame.addRoll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('knows when is is not a strike', function() {
      frame.addRoll(1);
      frame.addRoll(1);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('#isSpare', function() {
    it('knows when it is a spare', function() {
      frame.addRoll(4);
      frame.addRoll(6);
      expect(frame.isSpare()).toBe(true);
    });

    it('knows when is is not a spare', function() {
      frame.addRoll(1);
      frame.addRoll(1);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe('#bonus', function () {
    it('returns the index to the next two rolls in case of a strike', function() {
      frame.addRoll(10);
      expect(frame.bonus()).toEqual([1, 2]);
    });

    it('returns the index to the next roll in case of a spare', function() {
      frame.addRoll(4);
      frame.addRoll(6);
      expect(frame.bonus()).toEqual([2])
    });

    it('returns nothing when no bonus frame', function() {
      frame.addRoll(3);
      frame.addRoll(3);
      expect(frame.bonus()).not.toBeDefined();
    });
  });

  describe('#isLastFrame', function() {
    it('knows it is not the last frame', function() {
      frame.frameIndex = 5;
      expect(frame.isLastFrame()).toEqual(false)
    });

    it('knows it is the last frame', function() {
      frame.frameIndex = 9;
      expect(frame.isLastFrame()).toEqual(true);
    });
  });

  describe('#isLastFrameOver', function() {
    it('knows the last frame is over', function() {
      frame.frameIndex = 9;
      frame.turns = 3;
      expect(frame.isLastFrameOver()).toEqual(true);
    })
  });

});
