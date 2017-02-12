describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should keep track of the total score", function() {
    game.pinsKnockedDown(4);
    expect(game.totScore).toEqual(4);
  });


  describe("#framesCounter", function(){
    it("allows the game to have a total of 10 frames maximum", function() {
      for (var i = 0; i < 9; i++) {
        game.pinsKnockedDown(10);
        };
      expect( function(){game.pinsKnockedDown(10);} ).toThrow(new Error("Game Over"));
    });
  });

  describe("#addBonuses", function(){
    it("in case of spare, adds the score of the 1st roll of the next frame to the total score", function() {
      game.pinsKnockedDown(5);
      game.pinsKnockedDown(5);
      game.pinsKnockedDown(3);
      game.pinsKnockedDown(4);
      expect(game.totScore).toEqual(20);
    });
    it("in case of strike, adds the score of the next frame to the total score", function() {
      game.pinsKnockedDown(10);
      game.pinsKnockedDown(3);
      game.pinsKnockedDown(4);
      expect(game.totScore).toEqual(24);
    });
  });

  describe("#isTenthFrame", function(){
    it("identifies the 10th and last frame", function() {
      for (var i = 0; i < 9; i++) {
        game.pinsKnockedDown(10);
      };
      expect(game.isTenthFrame()).toBeTruthy();
    });
  });

});
