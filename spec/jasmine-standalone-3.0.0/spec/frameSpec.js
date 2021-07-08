// Ask teachers about when to use . and when #
// I'm a bit unclear when exactly I should and shouldn't
// be using pribate attributes and methods

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#score', function() {
    it('has a starting value of null', function() {
      expect(frame.score).toBe(null);
    });
    it('is the sum of ball1 and ball2', function() {
      frame.setBall1(4);
      frame.setBall2(3);
      expect(frame.score).toBe(7);
    });
  });

  describe('#ball1', function() {
    it('has a starting value of null', function() {
      expect(frame.ball1).toBe(null);
    });
  });

  describe('.setBall1', function() {
    it('changes when given a new value', function() {
      frame.setBall1(5);
      expect(frame.ball1).toBe(5);
    });
    it("doesn't award strike when ball1 is < 10", function() {
      frame.setBall1(9);
      expect(frame.strike).toEqual(false);
    });
    it("it awards a strike when ball1 is 10", function() {
      frame.setBall1(10);
      expect(frame.strike).toEqual(true);
    });
  });

  describe('#ball2', function() {
    it('has a starting value of null', function() {
      expect(frame.ball2).toBe(null);
    });
  });

  describe('.setBall2', function() {
    it('changes value of ball2 given a new value', function() {
      frame.setBall2(5);
      expect(frame.ball2).toBe(5);
    });
    it("doesn't award a spare when ball1 + ball2 < 10", function() {
      frame.setBall1(5);
      frame.setBall2(4);
      expect(frame.spare).toEqual(false);
    });
    it('awards a spare when ball1 + ball2 === 10', function() {
      frame.setBall1(6);
      frame.setBall2(4);
      expect(frame.spare).toEqual(true);
    });
  });
  describe('.complete', function() {
    it('checks whether frame is complete', function() {
      expect(frame.isComplete()).toEqual(false);
    });
    it('returns true when frame is complete', function() {
      frame.setBall1(7);
      frame.setBall2(2)
      expect(frame.isComplete()).toEqual(true);
    });
    it('knows frame is incomplete when strike is true and score is 10',
    function() {
      frame.setBall1(10);
      expect(frame.isComplete()).toEqual(false);
    });
  });

});
