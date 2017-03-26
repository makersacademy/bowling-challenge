describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  it("is defined", function() {
    expect(game).toBeDefined();
  });

  describe("score", function () {

    function rollMany(n, pinsKnockedDown) {
      for (var i = 0; i < n; i++) {
        game.roll(pinsKnockedDown);
      }
    }

    function rollSpare() {
      game.roll(9);
      game.roll(1);
    }

    function rollStrike() {
      game.roll(10);
    }

    it("scores gutter game", function() {
      rollMany(20, 0);
      expect(game.score()).toEqual(0);
    });

    it("scores every roll", function() {
      rollMany(20, 1);
      expect(game.score()).toEqual(20);
    });

    it("scores 1 spare", function() {
      rollSpare();
      game.roll(3);
      rollMany(17, 0);
      expect(game.score()).toEqual(16);
    });

    it("scores 1 strike", function () {
      rollStrike();
      game.roll(3);
      game.roll(3);
      rollMany(16, 0);
      expect(game.score()).toEqual(22);
    });

  });

});
