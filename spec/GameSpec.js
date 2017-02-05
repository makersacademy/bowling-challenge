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
    });

    it("allows a maximum of 10 frames to be added to a game", function(){
      for (var i = 0; i < 10; i++) {
      game.addFrame();
    }
      expect(game._frames.length).toBe(10)
      expect(function(){ game.addFrame() }).toThrow(new Error("The game is over!"));
    });
  });

  describe("during the game", function(){

    beforeEach(function() {
      frame = new Frame();
    });

    it("keeps the current score", function(){
      game.startGame(frame);
      frame.firstBowl(3);
      frame.secondBowl(4);
      expect(game.viewCurrentScore()).toBe(7)
    });
  });
})
