describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe("when started", function() {
    it("adds a frame to the array of frames" , function(){
      game.startGame();
      expect(game._frames.length).toBe(1)
    });

    it("adds further frames to the array of frames", function(){
      game.startGame();
      game.addFrame();
      expect(game._frames.length).toBe(2)
    })
  });
});
