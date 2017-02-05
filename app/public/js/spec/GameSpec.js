describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++)
      game.roll(pins);
  }

  describe("Gutter game", function() {
    it('should return 0', function() {
      // var n = 20;
      // var pins = 0;
      rollMany(20, 0);
      expect(game.getScore()).toEqual(0);
    });
  });

  describe("All rolls of the game", function() {
    it('should return 20 points', function() {
      rollMany(20, 1);
      expect(game.getScore()).toEqual(20);
    });
  });

  describe("Spare", function() {
    it('should return the correct number of points', function() {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(17, 0);
      expect(game.getScore()).toEqual(16);
    });
  });



});
