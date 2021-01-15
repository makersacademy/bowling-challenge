describe ('Scorer', function() {

  var scorer;

  beforeEach(function () {
    scorer = new Scorer();
  });

  describe('calculate', function() {
    it('sums the rolls in the frame', function() {
      scorer.calculate([4, 3]);
      expect(scorer.scores).toEqual([7]);
    });

    it('adds total to scores list for multiple rolls', function() {
      scorer.calculate([4, 3]);
      scorer.calculate([1, 2]);
      expect(scorer.scores).toEqual([7,3]);
    });

    it('identifies spare and inserts / into scores', function() {
      scorer.calculate([9, 1]);
      expect(scorer.scores).toEqual(['/']);
    });

  });

  describe('total', function() {
    it('returns total of all scores', function() {
      scorer.calculate([4, 3]);
      scorer.calculate([1, 2]);
      expect(scorer.total()).toEqual(10)
    });
  });

  describe('bonus', function() {
    it('calculates bonus of spare as first roll of next frame', function() {
      scorer.calculate([9, 1]);
      scorer.calculate([4, 3]);
      expect(scorer.bonus()).toEqual(4);
    });
  });
});
