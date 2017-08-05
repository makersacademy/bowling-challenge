describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
    game.setFrames();
  });

  describe("initialization", function() {
    it("should contain ten frames", function () {
      expect(game.frames.length).toEqual(10);
      game.frames.forEach(function (frame) {
        expect(frame instanceof Frame).toBeTruthy();
      });
    });
  });

  describe("getting the score", function() {
    it("should calculate the score from all its frames", function () {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      game.play();
      expect(game.getScore()).toEqual(50);
    });
  });
});
