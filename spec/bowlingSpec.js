describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  var john;

  beforeEach(function() {
    john = new Player('John');
  });

  describe('allows a user to', function() {

    it('add a player to the game', function() {
      game.addPlayer('John');
      expect(game.players).toEqual( [john] );
    });

  });

});
