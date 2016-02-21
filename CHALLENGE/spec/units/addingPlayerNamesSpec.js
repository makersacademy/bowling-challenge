describe('Adding player names', function() {

  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  describe('before each new game', function() {

    it('has no names registed', function() {
      expect(game.players).toEqual([]);
    });

    it('can accept a player name and add it to the game', function() {
      game.addPlayer('Joe');
      expect(game.players).toEqual(['Joe']);
    });
  });
});
