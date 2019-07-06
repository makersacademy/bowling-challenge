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

  describe('which_roll', function(){

    it('returns 1 if not taken first roll', function() {
      game = new Game;
      expect(game.current_roll()).toEqual(1)
    });

    it('returns 2 if taken first roll', function() {
      game = new Game;
      game.input_roll(1)
      expect(game.current_roll()).toEqual(2);
    });

    it('returns 1 if taken second roll', function() {
      game = new Game;
      game.input_roll(1)
      game.input_roll(3)
      expect(game.current_roll()).toEqual(1)
    });

  });

  describe('frame', function() {
    it('returns which frame of the game a player is in', function() {
      game = new Game;
      game.input_roll(1)
      expect(game.frame()).toEqual(1);
      game.input_roll(3)
      expect(game.frame()).toEqual(1);
    });
  });


});
