describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#initialize', function() {
    it('starts with a default number of pins', function() {
      frame = new Frame(3);
      expect(frame.pins).toEqual(3);
    });
    it('set a default number of pins if no argument is passed', function() {
      expect(frame.pins).toEqual(frame.defaults.pins);
    });
  });

  describe('#setNextFrame', function() {
    it('set the following frame', function() {
      var nextFrame = new Frame();
      frame.setNextFrame(nextFrame);
      expect(frame.nextFrame).toEqual(nextFrame);
    });
  });

  describe('#rollPlayed', function() {
    it('returns the number of rolls played', function() {
      frame.recordRoll(1);
      frame.recordRoll(1);
      expect(frame.rollPlayed()).toEqual(2);
    });
  });

  describe('#score', function() {
    it('returns the sum of the rolls scores', function() {
      frame.recordRoll(1);
      frame.recordRoll(1);
      expect(frame.score()).toEqual(2);
    });
  });

  describe('#isStrike', function() {
    it('returns true if all the pins are knocked down at the first roll', function() {
      frame.recordRoll(frame.pins);
      expect(frame.isStrike()).toBe(true);
    });
  });

  describe('#isSpare', function() {
    it('returns true if all the pins are knocked down in two rolls', function() {
      frame.recordRoll(0);
      frame.recordRoll(frame.pins)
      expect(frame.isSpare()).toBe(true);
    });
  });

  describe('#isOver', function() {
    describe('returns true if the frame is over', function() {
      it('due to a strike', function() {
        frame.recordRoll(frame.pins);
        expect(frame.isOver()).toBe(true);
      });
      it('cause two rolls have been played', function() {
        frame.recordRoll(0);
        frame.recordRoll(0);
        expect(frame.isOver()).toBe(true);
      });
    });
  });

  describe('#spareBonus', function() {
    it('returns the bonus amount due to a spare frame', function() {
      frame.setNextFrame(new Frame());
      frame.recordRoll(1);
      frame.recordRoll(frame.pins - 1);
      frame.nextFrame.recordRoll(1)
      expect(frame.spareBonus()).toEqual(1);
    });
  });

  describe('#strikeBonus', function() {
    it('returns the bonus amount due to a strike frame', function() {
      frame.setNextFrame(new Frame());
      frame.recordRoll(frame.pins);
      frame.nextFrame.recordRoll(1);
      frame.nextFrame.recordRoll(1);
      expect(frame.strikeBonus()).toEqual(2);
    });
  });

  describe('#totalScore', function() {
    it('returns the total score of the frame (bonus included)', function() {
      frame.recordRoll(0);
      frame.recordRoll(frame.pins);
      frame.setNextFrame(new Frame());
      frame.nextFrame.recordRoll(frame.pins);
      expect(frame.totalScore()).toEqual(frame.score()+frame.pins);
    });
  });

});
