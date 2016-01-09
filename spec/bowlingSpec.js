describe('Game', function() {

  var game

  beforeEach(function() {
   game = new Game();
  });

  it('has a starting score of 0', function() {
    expect(game.score).toEqual(0);
  });

  describe('#pinsKnockedDown', function() {
    it('adds the number of pins to the score', function() {
      game.knockDownPins(9);
      expect(game.score).toEqual(9);
    });
  });

  describe('#getScore', function() {
    it('returns the current score', function() {
      game.knockDownPins(9);
      game.knockDownPins(8);
      expect(game.getScore()).toEqual(17);
    });
  });

});
