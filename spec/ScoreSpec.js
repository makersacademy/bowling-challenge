describe ('Score', function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe('#roll', function() {
    it('adds up rolls', function() {
      score.roll(5)
      score.roll(2)
      expect(score.total()).toEqual(7)
    });
  });
});
