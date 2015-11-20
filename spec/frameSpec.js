describe('Frame', function(){
  var frame;

  beforeEach(function() {
    frame = new Frame();
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
});
