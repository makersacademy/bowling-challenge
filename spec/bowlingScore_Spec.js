describe('Bowling', function() {

  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe('#scoresIntoFrames', function() {
    it('correctly inputs 3 into frame 1, bowl 1', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 3);
      expect(score.searchFrames(1,1)).toBe(3);
    });

    it('correctly inputs 8 into frame 5, bowl 2', function() {
      score.createsFrames()
      score.scoresIntoFrames(5, 2, 8);
      expect(score.searchFrames(5, 2)).toBe(8);
    });
  });

  describe('#strikeOrSpare', function() {
    it('identifies a strike', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      expect(score.strikeOrSpare(1,1)).toBe(true);
    });
    it('doesnt identifiy a strike or spare', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 4);
      expect(score.strikeOrSpare(1,1)).toBe(false);
    });
    it('identifies spare', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 5);
      score.scoresIntoFrames(1, 2, 5);
      expect(score.strikeOrSpare(1,1)).toBe(true);
    });
  });

  describe('#gameScoring - Basic', function() {
    it('scores basic points', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 8);
      score.scoresIntoFrames(1, 2, 0);
      score.scoresIntoFrames(2, 1, 0);
      score.scoresIntoFrames(2, 2, 3);
      score.scoresIntoFrames(3, 1, 1);
      score.scoresIntoFrames(3, 2, 8);
      score.gameScoring()
      expect(score.result).toEqual(20)
    });
    it('scores basic points', function() {
      score.createsFrames()
      score.gameScoring()
      score.scoresIntoFrames(1, 1, 1);
      score.scoresIntoFrames(1, 2, 8);
      score.scoresIntoFrames(2, 1, 4);
      score.scoresIntoFrames(2, 2, 5);
      score.gameScoring()
      expect(score.result).toEqual(18)
    });
    it('scores basic points', function() {
      score.createsFrames()
      score.scoresIntoFrames(9, 1, 1);
      score.scoresIntoFrames(9, 2, 1);
      score.scoresIntoFrames(10, 1, 9);
      score.scoresIntoFrames(10, 2, 0);
      score.gameScoring()
      expect(score.result).toEqual(11)
    });
  });

  describe('#gameScoring - Strikes', function() {

    it('calculates basic strike', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 1);
      score.scoresIntoFrames(2, 2, 2);
      score.gameScoring()
      expect(score.result).toEqual(16)
    });

    it('calculates 3 strikes in 3 frames', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 10);
      score.gameScoring()
      expect(score.result).toEqual(30)
    });

    it('calculates odd scores (strikes with no follow up)', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(1, 2, 0);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(2, 2, 0);
      score.scoresIntoFrames(3, 1, 10);
      score.scoresIntoFrames(3, 2, 0);
      score.gameScoring()
      expect(score.result).toEqual(30)
    });

    it('calculates a single strike', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 2);
      score.scoresIntoFrames(2, 2, 5);
      score.gameScoring()
      expect(score.result).toEqual(24)
    });

    it('calculates two strikes back to back', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(2, 1, 10);
      score.scoresIntoFrames(3, 1, 4);
      score.scoresIntoFrames(3, 2, 4);
      score.scoresIntoFrames(4, 1, 10);
      score.scoresIntoFrames(5, 1, 1);
      score.scoresIntoFrames(5, 2, 1);
      score.gameScoring()
      expect(score.result).toEqual(64)
    });

    it('calculates two strikes in seperate places', function() {
      score.createsFrames()
      score.scoresIntoFrames(7, 1, 10);
      score.scoresIntoFrames(8, 1, 4);
      score.scoresIntoFrames(8, 2, 5);
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 1);
      score.scoresIntoFrames(10, 2, 1);
      score.gameScoring()
      expect(score.result).toEqual(42)
    });

    it('checks end game frame 10 requiring 3 bowls', function() {
      score.createsFrames()
      score.scoresIntoFrames(10, 1, 10);
      score.scoresIntoFrames(10, 2, 3);
      score.scoresIntoFrames(10, 3, 1);
      score.gameScoring()
      expect(score.result).toEqual(14)
    });

    it('strike @ 9-1', function() {
      score.createsFrames()
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 1);
      score.scoresIntoFrames(10, 2, 1);
      score.gameScoring()
      expect(score.result).toEqual(14);
    });
  });

  describe('#gameScoring - Frame 10 / end game', function() {
    it('checks end game frame 10 requiring 3 bowls', function() {
      score.createsFrames()
      score.scoresIntoFrames(10, 1, 10);
      score.scoresIntoFrames(10, 2, 5);
      score.scoresIntoFrames(10, 3, 2);
      score.gameScoring()
      expect(score.result).toEqual(17)
    });

    it('strike @ 10-1', function() {
      score.createsFrames()

      score.scoresIntoFrames(10, 1, 10);
      score.scoresIntoFrames(10, 2, 1);
      score.scoresIntoFrames(10, 3, 1);
      score.gameScoring()
      expect(score.result).toEqual(12);
    });

    it('strike from 8 to 10c', function() {
      score.createsFrames()
      score.scoresIntoFrames(9, 1, 10);
      score.scoresIntoFrames(10, 1, 10);
      score.scoresIntoFrames(10, 2, 10);
      score.scoresIntoFrames(10, 3, 10);
      score.gameScoring()
      expect(score.result).toEqual(60);
    });
  });

  describe('#gameScoring - Spares', function() {
    it('scores a spare 1', function() {
      score.createsFrames()
      score.scoresIntoFrames(1, 1, 7);
      score.scoresIntoFrames(1, 2, 3);
      score.scoresIntoFrames(2, 1, 2);
      score.scoresIntoFrames(2, 2, 3);
      score.gameScoring()
      expect(score.result).toEqual(17)
    });

    it('scores a spare 2', function() {
      score.createsFrames()
      score.scoresIntoFrames(2, 1, 1);
      score.scoresIntoFrames(2, 2, 9);
      score.scoresIntoFrames(3, 1, 6);
      score.scoresIntoFrames(3, 2, 2);
      score.gameScoring()
      expect(score.result).toEqual(24)
    });

    it('scores a spare 3', function() {
      score.createsFrames()
      score.scoresIntoFrames(9, 1, 7);
      score.scoresIntoFrames(9, 2, 3);
      score.scoresIntoFrames(10, 1, 2);
      score.scoresIntoFrames(10, 2, 3);
      score.gameScoring()
      expect(score.result).toEqual(17)
    });

    it('spare @ 9-2', function() {
      score.createsFrames()
      score.scoresIntoFrames(9, 1, 5);
      score.scoresIntoFrames(9, 2, 5);
      score.scoresIntoFrames(10, 1, 1);
      score.scoresIntoFrames(10, 2, 1);
      score.gameScoring()
      expect(score.result).toEqual(13);
    });
  });
});
