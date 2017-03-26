describe("Game", function() {
  var game, frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  describe("Adding Frames", function() {
    it("starts with an empty array of frames by default", function() {
      expect(game.checkAllScores()).toEqual([]);
    });

    it("adds a frame object to the frames array", function() {
      game.addFrame(frame);
      expect(game.checkAllScores().length).toEqual(1);
    });
  });

  describe("Maximum Frames", function() {
    it("has a default 10 frames max", function() {
      expect(game.checkGameLength()).toEqual(10);
    });

    it("has a variable game length", function() {
      var shortGame = new Game(3);
      expect(shortGame.checkGameLength()).toEqual(3);
    });
  });

  describe("End Game", function() {
    it("throws error on addFrame when maximum frames reached", function() {
      for(var i = 1; i <= 10; i++) {
        game.addFrame(frame);
      }
      expect( function(){game.addFrame(frame)}).toThrowError("Game over!")
    });

    it("calculates the total score", function() {
      spyOn(frame, 'currentRoll').and.returnValue(6);
      var shortGame = new Game(3);
      for(var i = 1; i <= 3; i++) {
        game.addFrame(frame);
      }
      expect(game.calculateGameTotal()).toEqual(18);
    });
  });
});
