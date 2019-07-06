describe ('Game', function() {

  describe('construction', function() {
    it('constructs object with an empty rolls array', function() {
      game = new Game
      expect(game.roll.length).toEqual(0)
    });
  });

  describe('input roll', function() {
    it('takes a roll and stores it', function(){
    game = new Game;
    expect(game.input_roll(3)).toContain(3);
    });
  });


});
