describe('Bowling', function() {

  var bowling = new Bowling();

  describe('#score', function() {
    it('returns the starting score', function() {
      expect(bowling.score).toEqual(0);
    });
  });
});
