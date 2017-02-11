describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++)
      game.roll(pins);
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
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
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
      expect(game.getScore()).toEqual(16);
    });
  });

  describe("Strike", function() {
    it('should return the correct number of points', function() {
      rollStrike();
      game.roll(3);
      game.roll(4);
      rollMany(16, 0);
      expect(game.getScore()).toEqual(24);
    });
  });

  describe("Perfect game", function() {
    it('should return 300 points', function() {
      rollMany(12, 10);
      expect(game.getScore()).toEqual(300);
    });
  });

  // describe("Validations", function() {
  //   it("should not accept negative numbers as pins", function() {
  //     expect(function() { game.roll(-5) } ).toThrow("Invalid input: negative number.");
  //   });
  // 
  //   it("should not accept anything except numbers as pins", function() {
  //     expect(function() { game.roll("the amazing string") } ).toThrow('Invalid input. Please enter a number.');
  //   });
  // });

});
