describe("bowlingGame", function() {
  var game;

  beforeEach(function() {
  game = new BowlingGame();
  });

  describe("#bowl", function() {
    it("player can bowl and return a score", function() {
      game.bowl(7);
      expect(game.totalScore).toEqual(7);
    });

    it("player can bowl a strike and return a 10 score", function() {
      game.bowl(10);
      expect(game.totalScore).toEqual(10);
    });

    it("player can bowl a gutter ball and return a 0 score", function() {
      game.bowl(0);
      expect(game.totalScore).toEqual(0);
      });

    it("if player bowls a strike the frame number is incremented", function() {
      game.bowl(10);
    
      expect(game.frameNumber).toEqual(1);
    });

    it("player can get a spare by knocking over all the pins in two attempts", function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.frameNumber).toEqual(1);
    });




  });



});
