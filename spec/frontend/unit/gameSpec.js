describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should initialize with 0 frames played", function() {
    expect(game.framesPlayed).toEqual(0);
  });

  it("should initialize with no frame scores", function() {
    expect(game.frameScores).toEqual([]);
  });

  describe("unfinished", function() {

    beforeEach(function() {
      game.newTurn(0,0);
      game.newTurn(0,2);
      game.newTurn(0,2);
    });

    it("should calculate the total score", function() {
      expect(game.score()).toEqual(4);
    });
  });

  describe("with strikes", function() {

    beforeEach(function() {
      game.newTurn(10,0);
      game.newTurn(0,2);
      game.newTurn(0,2);
    });

    it("should calculate the total score", function() {
      expect(game.score()).toEqual(16);
    });
  });

  describe("with spares", function() {

    beforeEach(function() {
      game.newTurn(10,0);
      game.newTurn(9,1);
      game.newTurn(0,2);
    });

    it("should calculate the total score", function() {
      expect(game.score()).toEqual(32);
    });
  });

  describe("throws an error is you try to bowl more than 10 frames", function() {

    beforeEach(function() {
      game.newTurn(10,0);
      game.newTurn(9,1);
      game.newTurn(0,2);
      game.newTurn(9,1);
      game.newTurn(0,2);
      game.newTurn(9,1);
      game.newTurn(0,2);
      game.newTurn(9,1);
      game.newTurn(0,2);
      game.newTurn(9,1);
    });

    it("should calculate the total score", function() {
      expect(function() { game.newTurn(0,2);}).toThrow("Game over!")
    });
  });
});
