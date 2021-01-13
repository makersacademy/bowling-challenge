describe ('Scorer', function() {

  var scorer;

  beforeEach(function () {
    scorer = new Scorer();
  });

  describe('calculate', function() {
    it('sums the rolls in the frame', function() {
      scorer.calculate([4,3]);
      expect(scorer.scores).toEqual([7]);
    });

    it('adds total to scores list for multiple rolls', function() {
      scorer.calculate([4,3]);
      scorer.calculate([1,2]);
      expect(scorer.scores).toEqual([7,3]);
    });
  });

  describe('total', function() {
    it('returns total of all scores', function() {
      scorer.calculate([4,3]);
      scorer.calculate([1,2]);
      expect(scorer.total()).toEqual(10)
    });
  });
});
