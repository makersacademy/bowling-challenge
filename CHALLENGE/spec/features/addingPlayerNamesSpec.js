describe('Bowling game', function() {

  var game

  beforeEach(function() {
    game = new Bowling();
  });

  describe('To add players', function() {

    it('an entered name adds that player to the game', function() {
      expect(game.addPlayer()).toEqual([player]);
    });
  });
});
