describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with no rolls', function() {
    expect(frame.rollCount()).toEqual(0);
  });

  it('starts with a score of zero', function() {
    expect(frame.total()).toEqual(0);
  });

  describe('adding a score', function() {
    it('adds the score to the total', function() {
      frame.addScore(1);
      expect(frame.total()).toEqual(1);
    });

    it('increases the roll count by 1', function() {
      frame.addScore(1);
      expect(frame.rollCount()).toEqual(1);
    });

    describe('illegal scores', function() {
      it('raises an error on the first roll', function() {
        expect(function() {frame.addScore(11)}).toThrowError('Illegal Score');
      });

      it('raises an error on the second roll', function() {
        frame.addScore(6);
        expect(function() {frame.addScore(5)}).toThrowError('Illegal Score');
      });
    });
  });

  describe('zero rolls', function(){
    it('is not a strike', function() {
      expect(frame.isStrike()).toEqual(false);
    });
    it('is not a spare', function(){
      expect(frame.isSpare()).toEqual(false);
    });
    it('is not complete', function() {
      expect(frame.isComplete()).toEqual(false);
    });
  });

  describe('first roll', function() {
    describe('when strike', function() {
      it('is a strike', function() {
        frame.addScore(10);
        expect(frame.isStrike()).toEqual(true);
      });
      it('is not a spare', function(){
        frame.addScore(10);
        expect(frame.isSpare()).toEqual(false);
      });
      it('is complete', function() {
        frame.addScore(10);
        expect(frame.isComplete()).toEqual(true);
      });
    });
    describe('when not a strike', function() {
      it('is not a strike', function(){
        frame.addScore(3);
        expect(frame.isStrike()).toEqual(false);
      });
      it('is not a spare', function(){
        frame.addScore(3);
        expect(frame.isSpare()).toEqual(false);
      });
      it('is not complete', function(){
        frame.addScore(3);
        expect(frame.isComplete()).toEqual(false);
      });
    });
  });

  describe('second roll', function() {
    describe('when spare', function() {
      it('is not a strike', function(){
        frame.addScore(9);
        frame.addScore(1);
        expect(frame.isStrike()).toEqual(false);
      });
      it('is a spare', function(){
        frame.addScore(9);
        frame.addScore(1);
        expect(frame.isSpare()).toEqual(true);
      });
      it('is complete', function(){
        frame.addScore(9);
        frame.addScore(1);
        expect(frame.isComplete()).toEqual(true);
      });
    });
    describe('when not spare', function() {
      it('is not a strike', function(){
        frame.addScore(7);
        frame.addScore(1);
        expect(frame.isStrike()).toEqual(false);
      });
      it('is not a spare', function(){
        frame.addScore(7);
        frame.addScore(1);
        expect(frame.isSpare()).toEqual(false);
      });
      it('is complete', function(){
        frame.addScore(7);
        frame.addScore(1);
        expect(frame.isComplete()).toEqual(true);
      });
    });
  });
});
