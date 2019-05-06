describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('The user can', function() {

    it('input the number of pins they have knocked down for one roll', function() {
      game.roll(8);
      expect(game.frames).toEqual([8])
    });

    it('NOT input more than 10 for a roll', function() {
      var error = 'You cannot bowl more than 10!';
      expect(function() { game.roll(11) }).toThrow(error);
    });

  });

});
