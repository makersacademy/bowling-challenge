describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('game', function() {
    it('returns 3 ', function() {
      expect(bowling.game(1,2)).toEqual(3);
    });
  });
});