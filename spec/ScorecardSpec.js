describe('scorecard', function() {
  let scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('adding frames', function() {
    it('can accept a new frame', () => {
      scorecard.addFrame(2, 2);
      expect(scorecard.frames[0]).toBeInstanceOf(Frame);
    });
    it('can accept two frames', () => {
      scorecard.addFrame(2, 2);
      scorecard.addFrame(10);
      expect(scorecard.frames[1]).toBeInstanceOf(Frame);
    });
  });

  describe('one frame', function() {
    it('[0, 0] returns score 0', function() {
      scorecard.addFrame(0, 0);
      expect(scorecard.score).toEqual(0);
    });

    it('[0, 5] returns score 5', function() {
      scorecard.addFrame(0, 5);
      expect(scorecard.score).toEqual(5);
    });

    it('[3, 5] returns score 8', function() {
      scorecard.addFrame(3, 5);
      expect(scorecard.score).toEqual(8);
    });
  });

  describe('two frames', function() {
    it('[2, 6], [3, 2] scores 13', function() {
      scorecard.addFrame(2, 6);
      scorecard.addFrame(3, 2);
      expect(scorecard.score).toEqual(13);
    });

    it('[3, 7], [3, 2] scores 18', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 2);
      expect(scorecard.score).toEqual(18);
    });
  });

  describe('three frames', function() {
    it('[2, 6], [3, 2], [1, 4] returns 18', function() {
      scorecard.addFrame(2, 6);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(18);
    });

    it('[3, 7], [3, 2], [1, 4] returns 23', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 2);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(23);
    });

    it('[3, 7], [3, 7], [1, 4] returns 29', function() {
      scorecard.addFrame(3, 7);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(29);
    });

    it('[10], [3, 7], [1, 4] returns 36', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(36);
    });

    it('[10], [2, 7], [1, 4] returns 33', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(2, 7);
      scorecard.addFrame(1, 4);
      expect(scorecard.score).toEqual(33);
    });
  });

  describe('four frames', function() {
    it('[10], [10], [3, 7], [2, 3] returns 60', function() {
      scorecard.addFrame(10);
      scorecard.addFrame(10);
      scorecard.addFrame(3, 7);
      scorecard.addFrame(2, 3);
      expect(scorecard.score).toEqual(60);
    });
  });

  describe('open frame scorecards', function() {
    it('Gutter scorecard returns 0', function() {
      expect(scorecard.setScore([00, 00, 00, 00, 00, 00, 00, 00, 00, 00]))
          .toEqual(0);
    });

    it('scorecard with 5 pins hit returns 5', function() {
      expect(scorecard.setScore([05, 00, 00, 00, 00, 00, 00, 00, 00, 00]))
          .toEqual(5);
    });

    it('scorecard with 10 scores of 5 scores 50', function() {
      expect(scorecard.setScore([05, 05, 05, 05, 05, 05, 05, 05, 05, 05]))
          .toEqual(50);
    });
  });

  describe('strikes', function() {
    it('scorecard with 1 strike and then 5 returns 20', function() {
      expect(scorecard.setScore([10, 05, 00, 00, 00, 00, 00, 00, 00, 00]))
          .toEqual(20);
    });

    it('scorecard with 1 strike and then two 5s returns 25', function() {
      expect(scorecard.setScore([10, 05, 05, 00, 00, 00, 00, 00, 00, 00]))
          .toEqual(25);
    });
  });
});
