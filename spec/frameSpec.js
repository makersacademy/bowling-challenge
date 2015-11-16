// NOW REDUNDANT

describe('Frame', function(){
  beforeEach( function() {
    newFrame = new Frame(1);
    rules_gutter = {pinChance:0}
    rules_normal = {pinChance:5};
    rules_strike = {pinChance:10};
  });
  describe('initialize', function() {
    it('has a tally of 0', function() {
      expect(newFrame.tally).toEqual(0);
    });
    it('has a turn num of 1', function() {
      expect(newFrame.turnNum).toEqual(1);
    });
    it('knows what frame num it is', function() {
      expect(newFrame.frameNum).toEqual(1);
    });
    it('is not an open frame', function() {
      expect(newFrame.isOpen()).toBe(false);
    })
    it('is not a strike', function() {
      expect(newFrame.isStrike()).toBe(false);
    });
    it('is not a spare', function() {
      expect(newFrame.isStrike()).toBe(false);
    });
    it('is not finished', function() {
      expect(newFrame.isFinished()).toEqual(false);
    });
  });

  describe('bowl', function() {
    describe('when bowling normally (5 pins per bowl)', function() {
      it('updates the tally with pins knocked down', function() {
        newFrame.bowl(rules_normal.pinChance)
        expect(newFrame.tally).toEqual(5);
      });
      it('updates the turn number + 1', function() {
        newFrame.bowl(rules_normal.pinChance);
        expect(newFrame.turnNum).toEqual(2);
      });
      it('on the second bowl it will class the frame as a spare and finished', function() {
        newFrame.bowl(rules_normal.pinChance);
        newFrame.bowl(rules_normal.pinChance);
        expect(newFrame.isSpare()).toBe(true);
        expect(newFrame.isFinished()).toBe(true);
      });
    });
  });
});