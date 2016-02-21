describe('Bowling game', function() {

  var game;

  beforeEach(function() {
    game = new Bowling();
  });

  describe('To add players', function() {

    it('an entered name adds that player to the game', function() {
      game.addPlayer('Joe');
      expect(game.players).toEqual(['Joe']);
    });
  });
});
