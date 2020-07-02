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
    scorecard = new Scorecard2();
  });

  describe('adding rolls', function() {
    it('can accept a new frame', () => {
      expect(scorecard.score).toEqual(0);
    });
  });
});
