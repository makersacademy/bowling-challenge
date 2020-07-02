describe('scorecard', function() {
  let scorecard;

  class Framedouble {
    constructor(roll1, roll2 = 0) {
      this.roll1 = roll1;
      this.roll2 = roll2;
    }
    isStrike() {
      if (this.roll1 != 10) {
        return false;
      }
      return true;
    }
    isOpenFrame() {
      if (this.roll1 + this.roll2 == 10) {
        return false;
      }
      return true;
    }
    isSpare() {
      if (this.roll1 != 10 && this.roll1 + this.roll2 == 10) {
        return true;
      }
      return false;
    }
  };

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe('adding frames', function() {
    it('can accept a new frame', () => {
      scorecard.addFrame(new Framedouble(2, 2));
      expect(scorecard.frames[0]).toBeInstanceOf(Framedouble);
    });

    it('can accept two frames', () => {
      scorecard.addFrame(new Framedouble(2, 2));
      scorecard.addFrame(new Framedouble(10));
      expect(scorecard.frames[1]).toBeInstanceOf(Framedouble);
    });
  });
});
