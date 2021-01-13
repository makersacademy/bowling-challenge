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
  });
});
