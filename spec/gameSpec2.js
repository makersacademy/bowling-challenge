describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Adding frames", function() {
    it("starts with an empty array of frames by default", function() {
      expect(game.checkAllScores()).toEqual([]);
    });

    it("adds a frame object to the frames array", function() {
      var frame = jasmine.createSpy('frame');
      game.addFrame(frame);
      expect(game.checkAllScores().length).toEqual(1);
    });
  });
});
