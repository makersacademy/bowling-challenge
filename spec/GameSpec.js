describe("Game", function() {

  beforeEach(function() {
    game = new Game;
  });

  it("is defined", function() {
    expect(game).toBeDefined();
  });

  // it("starts a new frame", function () {
  //   expect(newFrame).toBeDefined
  // })

  // it("stores the list of completed frames", function() {
  //   var frame = new Frame;
  //   frame.roll(1);
  //   frame.roll(5);
  //   expect(game.completedFrames.length).toEqual(1);
  // });

  describe("score", function() {

    it("is defined", function() {
      expect(game.score).toBeDefined();
    });

    it("is 0 when game starts", function () {
      expect(game.score).toEqual(0);
    });

    it("calculates scores after every frame", function() {
      var frame = new Frame;
      game.roll(1);
      game.roll(5);
      expect(game.score).toEqual(6);
    });

  });

});
