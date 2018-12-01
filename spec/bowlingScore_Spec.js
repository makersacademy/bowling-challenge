describe('Bowling', function() {

  var score;

  beforeEach(function() {
    score = new Score();


  });
  describe('#scoresIntoFrames', function() {
    it('correctly inputs 3 into frame 1, bowl 1', function() {
      score.scoresIntoFrames(1, 1, 3);
      expect(score.frames[0]['bowl1']).toBe(3);
    });

    it('correctly inputs 8 into frame 5, bowl 2', function() {
      score.scoresIntoFrames(5, 2, 8);
      expect(score.frames[4]['bowl2']).toBe(8);
    });

    it('throws error if invalid scores', function() {
      score.scoresIntoFrames(1,1,8);
      score.scoresIntoFrames(1,2,3)
      expect(function() {
      score.scoresIntoFrames(1,2,3)
      }).toThrowError('Invalid score')
    });
  });

  describe('#searchFrames', function() {
    it('correctly identifies individual frame/bowl score', function() {
      score.scoresIntoFrames(1, 1, 3);
      expect(score.searchFrames(1, 1)).toEqual(3);
    });

    it('correctly identifies individual frame/bowl score', function() {
      score.scoresIntoFrames(1, 2, 9);
      expect(score.searchFrames(1, 2)).toEqual(9);
    });
  });

  describe('#isStrike', function() {
    it('identifies that a strike happened in frame', function() {
      score.scoresIntoFrames(1, 1, 10);
      expect(score._isStrike(1)).toEqual(true);
    });

    it('identifies no strike happened in frame', function() {
      score.scoresIntoFrames(1, 1, 3);
      expect(score._isStrike(1)).toEqual(false);
    });

    it('identifies it wasnt a strike if in second bowl', function() {
      score.scoresIntoFrames(1, 2, 10);
      expect(score._isStrike(1)).toEqual(false);
    });
  });

  describe('#isSpare', function() {
    it('identifies a spare in frame', function() {
      score.scoresIntoFrames(1, 1, 3);
      score.scoresIntoFrames(1, 2, 7);
      expect(score._isSpare(1)).toEqual(true);
    });

    it('identifies no spare in frame', function() {
      score.scoresIntoFrames(1, 1, 1);
      score.scoresIntoFrames(1, 2, 2);
      expect(score._isSpare(1)).toEqual(false);
    });

    it('identifies no spare in frame if a strike happened', function() {
      score.scoresIntoFrames(1, 1, 10);
      score.scoresIntoFrames(1, 2, 0);
      expect(score._isSpare(1)).toEqual(false);
    });
  });
});
