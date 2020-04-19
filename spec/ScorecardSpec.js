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
