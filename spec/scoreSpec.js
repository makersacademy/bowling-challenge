describe('Score', function() {
  var score;

  describe('Total score', function() {
    it('score is created', function() {
      score = new Score();
      expect(score).toBeInstanceOf(Score)
    });
  });
});