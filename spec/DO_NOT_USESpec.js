describe("game", function() {
  describe("adding frames to game", function() {
    it("should display the list of games", function() {
      game = new Game();
      game.newFrame(2,3);
      expect(game.showGamesFrames()).toEqual([[2,3]]);
    });

    it("should be able to handle more than one frame", function() {
      game = new Game();
      game.newFrame(2,3);
      game.newFrame(10, null);
      game.newFrame(3,7);
      expect(game.showGamesFrames()).toEqual([[2,3], [10, null], [3,7]])
    })

    it("should be able to tell if a frame is a strike / spare from game", function() {
      game = new Game();
      game.newFrame(2,3);
      game.newFrame(10, null);
      game.newFrame(3,7);
      expect(game.framesList[2].isASpare()).toEqual(true);
      expect(game.framesList[1].isAStrike()).toEqual(true);
    });

    it("should restrict the length of a game to 10 frames", function() {
      var game = new Game();
      for(var i = 1; i <= NUMBER_OF_FRAMES; i++) {
        game.newFrame(2,3);
      };
      expect(function() {
        game.newFrame(2,3);
      }).toThrowError("Game has finished");
    });
  });

  describe("frame score", function() {
    it("should be able to score a frame that is not a strike or spare", function() {
      game = new Game();
      game.newFrame(3,2);
      expect(game.score).toEqual(5);
    });

    it("should be able to tally scores that are not strikes or spares", function() {
      game = new Game;
      game.newFrame(3,5);
      game.newFrame(4,4);
      game.newFrame(5,3);
      expect(game.score).toEqual(24);
    });

    it("should be able to detect if there is a spare", function(){
      game = new Game;
      game.newFrame(3,7);
      game.newFrame(3,3);
      expect(game.spareDetector()).toEqual(true);
    });

    it("should be able to detect if there is not a spare", function(){
      game = new Game;
      game.newFrame(10,null);
      game.newFrame(3,3);
      expect(game.spareDetector()).toEqual(false);
    });

    it("should be able to add the bonus of a spare", function(){
      game = new Game;
      game.newFrame(2,8);
      game.newFrame(2,3);
      expect(game.score).toEqual(17);
    });

    it("should be able to detect if there is a strike", function(){
      game = new Game;
      game.newFrame(10,null);
      game.newFrame(3,3);
      expect(game.strikeDetector()).toEqual(true);
    });

    it("should be able to tally the score of a strike", function(){
      game = new Game;
      game.newFrame(10,null);
      game.newFrame(4,4);
      expect(game.score).toEqual(26);
    })

    it("should be able to detect two consecutive strikes", function(){
      game = new Game;
      game.newFrame(10,null);
      game.newFrame(10,null);
      expect(game.doubleStrikeDetector()).toEqual(true);
    })

    xit("should be able to handle two consecutive strikes", function(){
      game = new Game;
      game.newFrame(10,null);
      game.newFrame(10,null);
      game.newFrame(1,1);
      expect(game.score).toEqual(35);
    })
  });
});
