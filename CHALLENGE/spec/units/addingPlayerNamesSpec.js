describe('Adding player names', function() {

  var game

  beforeEach(function() {
    game = new Bowling();
  });

  describe('before each new game', function() {

    it('has no names registed', function() {
      expect(game.players).toEqual([]);
    });
  });
});
