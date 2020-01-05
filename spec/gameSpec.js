describe("Game", function() {
  var game = new Game();

  beforeEach(function() {
    game = new Game();
  });

  describe("when calculating the total score", function() {
    it("can calculate the score of an incomplete game", function() {
      game.addFrame([2, 5]);
      expect(game.calculateTotalScore()).toEqual(7);
    });

    it("can calculate the score of a gutter game", function() {
      generateFrames([0, 0], [0, 0]);
      expect(game.calculateTotalScore()).toEqual(0);
    });
  
    it("can calculate the score of a game without spares or strikes", function() {
      generateFrames([2, 5], [6, 1]);
      expect(game.calculateTotalScore()).toEqual(70);
    });
  
    it("can calculate the score of a game with spares", function() {
      generateFrames([2, 8], [6, 1]);
      expect(game.calculateTotalScore()).toEqual(119);
    });
  
    it("can calculate the score of a perfect game with 12 strikes", function() {
      generateFrames([10], [10, 10, 10]);
      expect(game.calculateTotalScore()).toEqual(300);
    });
  
    it("can calculate the score of a game with spares and strikes and two rolls on the last frame", function() {
      game.addFrame([10]);
      game.addFrame([10]);
      game.addFrame([10]);
      game.addFrame([2, 8]);
      game.addFrame([2, 2]);
      game.addFrame([2, 5]);
      game.addFrame([4, 6]);
      game.addFrame([10]);
      game.addFrame([2, 7]);
      game.addFrame([2, 7]);
      expect(game.calculateTotalScore()).toEqual(152);
    });
  
    it("can calculate the score of a game with spares and strikes and three rolls on the last frame", function() {
      game.addFrame([10]);
      game.addFrame([10]);
      game.addFrame([10]);
      game.addFrame([2, 8]);
      game.addFrame([2, 2]);
      game.addFrame([2, 5]);
      game.addFrame([4, 6]);
      game.addFrame([10]);
      game.addFrame([2, 7]);
      game.addFrame([2, 8, 4]);
      expect(game.calculateTotalScore()).toEqual(157);
    });
  });

  function generateFrames(frame, finalFrame) {
    for (var i = 0; i < 9; i++) game.addFrame(frame);
    game.addFrame(finalFrame);
  };
});
