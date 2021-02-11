'use strict';

describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('Storing Frames', function() {
    it('starts with empty scorecard', function() {
      expect(scorecard.getFrames()).toEqual([]);
    });

    it('hold rolls in current frame until frame complete', function() {
      scorecard.roll(3)
      expect(scorecard.getCurrentFrame()).toEqual([3])
    });

    it('saves rolls as frames and stores together', function() {
      for (let i = 0; i < 5; i++) {
        scorecard.roll(3)
      }
      expect(scorecard.getFrames()).toEqual([[3, 3], [3, 3]])
    });
  });

  describe('Gets Total', function() {
    it('adds points to total once frame is complete', function() {
      for (let i = 0; i < 5; i++) {
        scorecard.roll(3)
      }
      expect(scorecard.getTotal()).toEqual(12)
    });

    it('works with ten frames', function() {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(3)
      }
      expect(scorecard.getTotal()).toEqual(60)
    });
  });

  describe('Gutterball', function() {
    it('gives 0', function() {
      for (let i = 0; i < 20; i++) {
        scorecard.roll(0)
      }
      expect(scorecard.getTotal()).toEqual(0)
    });
  });

  describe('Spares', function() {
    it('gives bonus for spare - next roll doubled', function() {
      for (let i = 0; i < 4; i++) {
        scorecard.roll(5)
      }
      expect(scorecard.getTotal()).toEqual(25)
    });
  });

  describe('Strikes', function() {
    it('saves strike in frame alone', function() {
      scorecard.roll(10)
      expect(scorecard.getFrames()).toEqual([[10]])
    });

    it('tests a perfect game', function() {
      for (let i = 0; i < 12; i++) {
        scorecard.roll(10)
      }
      expect(scorecard.getTotal()).toEqual(300)
    });

    it('gives bonus for one strike - next two rolls doubled', function() {
      scorecard.roll(10)
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.getTotal()).toEqual(22)
    });

    it('gives bonus for double strike - two rolls after strikes doubles', function() {
      scorecard.roll(10)
      scorecard.roll(10)
      scorecard.roll(3)
      scorecard.roll(3)
      expect(scorecard.getTotal()).toEqual(45)
    });
  });

  describe('Tenth Frame', function() {
    it('tenth frame bonus - test with spare', function() {
      for (let i = 0; i < 18; i++) {
        scorecard.roll(0)
      }
      for (let i = 0; i < 3; i++) {
        scorecard.roll(5)
      }
      expect(scorecard.getTotal()).toEqual(15)
    });
  });
});
