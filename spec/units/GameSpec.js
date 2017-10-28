describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe(".numberOfFrames", function() {
    it("initially is zero", function() {
      expect(game.numberOfFrames()).toEqual(0);
    })
  })

  describe(".addRoll", function() {
    it("adds one to the frame count", function() {
      game.addRoll(4);
      expect(game.numberOfFrames()).toEqual(1);
    })
    it("initially sets the total score to the value of the first roll", function() {
      game.addRoll(4);
      expect(game.totalScore()).toEqual(4);
    })
    it("adds a second frame on the third (non-strike) roll", function() {
      game.addRoll(4);
      console.log(game);
      game.addRoll(5);
      console.log(game);
      game.addRoll(6);
      console.log(game);
      expect(game.numberOfFrames()).toEqual(2);
    })
  })

});
