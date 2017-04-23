describe('Score', function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  describe('new', function() {
    it('returns a random number between 0 to 10 if no argument', function() {
      var number = score.new();
      expect(number >= 0 && number <= 10).toBeTruthy();
    });
    it('returns a random number between 0 and the number passed as an argument', function() {
      var number = score.new(0);
      expect(number).toEqual(0);
    });
  });
});
