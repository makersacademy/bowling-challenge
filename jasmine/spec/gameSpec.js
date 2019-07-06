describe ('Game', function() {

  describe('construction', function() {
    it('constructs object with an empty rolls array', function() {
      game = new Game
      expect(game.roll.length).toEqual(0)
    });
  });

  describe('input roll', function() {

    it('takes a roll and stores it', function() {
      game = new Game;
      expect(game.input_roll(3)).toContain(3);
    });

    it('only accepts numbers between 0 and 10', function() {
      game = new Game;
      expect(game.input_roll(-1)).toEqual("Invalid number");
      expect(game.input_roll(11)).toEqual("Invalid number");
    });

  });

  // As a user I want it to be clear if I am on my first or second roll
  describe('which_roll', function(){

    it('accesses the roll property and returns 1 if on first roll', function() {
      game = new Game;
      game.input_roll(1)
      expect(game.which_roll()).toEqual(1)
    });

    it('accesses the roll property and returns 2 if on second roll', function() {
      game = new Game;
      game.input_roll(1)
      game.input_roll(3)
      expect(game.which_roll()).toEqual(2);
    });

    it('resets after roll 2 back to roll 1 rather than increase to 3', function() {
      game = new Game;
      game.input_roll(1)
      game.input_roll(3)
      game.input_roll(4)
      expect(game.which_roll()).toEqual(1)
    });

  });


});
