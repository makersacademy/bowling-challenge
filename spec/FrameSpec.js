describe('Frame', function() {
  let frame;
  let fakeRound;

  beforeEach(function() {
    frame = new Frame();
    fakeRound = {};
  });

  describe('initial', function() {
    it('should have a score of 0', function() {
      expect(frame._score).toEqual(0);
    });

    it('should have a bonus score of 0', function() {
      expect(frame._bonusScore).toEqual(0);
    });

    it('should have an empty array for rounds played', function() {
      expect(frame._rounds).toEqual([]);
    });

    it('returns 2 if frame is not the 10th frame', function() {
      expect(frame._noOfRounds).toEqual(2);
    });
  });

  describe('reset', function() {
    it('should reset the frames rounds to an empty array', function() {
      frame.play(fakeRound);
      frame.reset();

      expect(frame._rounds).toEqual([]);
    })
  });

  describe('play', function() {
    it('throws an error if the number of rounds has been exceeded for a normal frame', function() {
        frame.play(fakeRound);
        frame.play(fakeRound);

      expect(function() {
        frame.play(fakeRound);
      }).toThrowError('The maximum round limit for this frame has been reached!');
    });
  });

  describe('containsStrikeOrSpare', function() {
    it('returns true if rounds contain a strike or a spare', function() {
      let fakeRound = {
        score: function() {
          return 10;
        }
      };
      frame.play(fakeRound);

      expect(frame.containsStrikeOrSpare()).toEqual(true);
    });

    it('returns false if rounds do not contain a strike or a spare', function() {
      let fakeRound = {
        score: function() { return 3; }
      };

      frame.play(fakeRound);
      frame.play(fakeRound);

      expect(frame.containsStrikeOrSpare()).toEqual(false);
    });
  });

  describe('strikeOnFirstRound', function() {
    it('returns true strike was hit on first round', function() {
      let fakeStrikeRound = {
        isStrike: function() {
          return true;
        }
      };
      frame.play(fakeStrikeRound);
      frame.play(fakeRound);

      expect(frame.strikeOnFirstRound()).toEqual(true);
    });

    it('returns false if normal first round', function() {
      let fakeStrikeRound = {
        isStrike: function() {
          return false;
        }
      };
      frame.play(fakeStrikeRound);
      frame.play(fakeRound);

      expect(frame.strikeOnFirstRound()).toEqual(false);
    });
  });

  describe('score', function() {
    it('returns the score of the current frame', function() {
      let fakeRound = {
        score: function() { return 3; }
      };

      frame.play(fakeRound);
      frame.play(fakeRound);

      expect(frame.score()).toEqual(6)
    });
  });
});
