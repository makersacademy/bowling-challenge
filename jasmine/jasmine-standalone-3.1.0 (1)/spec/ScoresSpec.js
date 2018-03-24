describe('Score', function() {
  var score;
  beforeEach(function() {
    score = new Score
  });

  describe('Score', function() {
    it('has a total', function() {
      expect(score.total).toEqual(0)
    });

    it('has a frameTotal', function() {
      expect(score.frameTotal).toEqual(0)
    });
  });

  describe('roll', function() {
    it('adds a score', function() {
      expect(score.roll(4)).toEqual(4)
    });

    // it('', function() {
    //
    // })
  });
});
