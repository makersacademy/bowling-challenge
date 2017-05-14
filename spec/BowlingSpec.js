describe('Bowling', function() {

  var game

  beforeEach (function() {
    game = new Bowling();
  });

  describe('#roll', function() {
    it('adds the knocked down pins to the rolls',function() {
      game.roll(5)
      expect(game.rolls).toContain(5);
    });
  });

  describe('#score', function() {
    it('returns the total score',function() {
      game.roll(5)
      expect(game.score()).toEqual(5);
    });
  });

});
