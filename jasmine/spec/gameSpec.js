describe ('Game', function() {

  describe('construction', function() {
    it('constructs object with an empty rolls array', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      expect(game.roll.length).toEqual(0)
    });
  });

  describe('input roll', function() {

    it('takes a roll and stores it', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      expect(game.input_roll(3)).toContain(3);
    });

    it('only accepts numbers between 0 and 10', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      expect(game.input_roll(-1)).toEqual("Invalid number");
      expect(game.input_roll(11)).toEqual("Invalid number");
    });

  });

  describe('which_roll', function(){

    it('returns 1 if not taken first roll', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      expect(game.current_roll()).toEqual(1)
    });

    it('returns 2 if taken first roll', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      game.input_roll(1)
      expect(game.current_roll()).toEqual(2);
    });

    it('returns 1 if taken second roll', function() {
      var fakeFrame = {
      };
      var game = new Game(fakeFrame);
      game.input_roll(1)
      game.input_roll(3)
      expect(game.current_roll()).toEqual(1)
    });

  });



});
