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
    it('rolls start as an empty array', () => {
      expect(scorecard.rolls).toEqual([]);
    });

    it('Add roll 1', () => {
      scorecard.addRoll(1);
      expect(scorecard.rolls).toEqual([1]);
    });

    it('Add roll 3', () => {
      scorecard.addRoll(3);
      expect(scorecard.rolls).toEqual([3]);
    });

    it('Add two rolls', () => {
      scorecard.addRoll(3);
      scorecard.addRoll(3);
      expect(scorecard.rolls).toEqual([3, 3]);
    });
  });
});
