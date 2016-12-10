describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.currentTotal).toEqual(0);
    })

    it("should start on the first frame", function() {
      expect(game.currentFrame).toEqual(1);
    })

  })

  describe("playing a game", function() {
    it("moves to the next frame after two balls are played", function() {
      game.moveToNextFrame()
      expect(game.currentFrame).toEqual(2)
    })
  })

  describe("end of the game", function() {
    it("at the end of the game the frame number is set back to zero", function() {
      game.moveToNextFrame()
      game.moveToNextFrame()
      game.resetGame()
      expect(game.currentFrame).toEqual(1)
    })

    it("the game has a maximum of ten frames", function() {
      for(count = 0; count < 10; count++ ) {
        game.moveToNextFrame()
      }
      expect(function() { game.moveToNextFrame()}).toThrow(new Error("Game over!"))
    })
  })

})
