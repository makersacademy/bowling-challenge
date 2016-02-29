describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame',
      ['addRoll', 'isRollsComplete', 'calcTotal', 'addBonus', 'isFrameClosed']);
    function frameKlass() { return frame; }
    game = new Game(frameKlass);
    });

  describe('initializing a new Game', function() {
    it('starts out empty', function() {
      expect(game.frames).toEqual([]);
    });
  });

  describe('#addRoll', function() {
    it('adds a roll to the game and calls addRoll on frame', function() {
      game.addRoll(0)
      expect(frame.addRoll).toHaveBeenCalled();
    });

    it('pushes a frame that has rolls complete to frames', function() {
      frame.isRollsComplete.and.returnValue(true);
      game.addRoll(0)
      expect(game.frames).toContain(frame);
    });
  });

  describe('#addRoll and maximum frame handling', function() {
    it('frame.isFrameClosed is called on the final frame', function() {
      frame.isRollsComplete.and.returnValue(true);
      for (var i = 0; i < 11; i++) { game.addRoll(0); }
      expect(frame.isFrameClosed).toHaveBeenCalled();
    });

    it('adds maximum frames to the game', function() {
      frame.isRollsComplete.and.returnValue(true);
      frame.isFrameClosed.and.returnValue(true);
      for (var i = 0; i<10; i++) { game.addRoll(0); }
      expect(function() { game.addRoll(0); }).toThrowError("Max frames");
    });
  });

  describe('totalScore property', function() {
    it('calculates the total scores per frame', function() {
      frame.isRollsComplete.and.returnValue(true);
      frame.calcTotal.and.returnValue(3);
      game.addRoll()
      expect(game.totalScore).toEqual([3]);
    });

    it('calculates the running total of scores per frame', function() {
      frame.isRollsComplete.and.returnValue(true);
      frame.calcTotal.and.returnValue(3);
      game.addRoll()
      game.addRoll()
      expect(game.totalScore).toEqual([3, 6]);
    });

    it('calls addBonus on frame', function() {
      frame.isRollsComplete.and.returnValue(true);
      frame.bonusBalls = 1;
      game.addRoll(10)
      game.addRoll(1)
      expect(frame.addBonus).toHaveBeenCalled();
    });
  });
});
