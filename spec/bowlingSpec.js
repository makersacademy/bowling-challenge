describe("Bowling", function() {
  var game;

  beforeEach(function() {
    game = new Bowling();
  })

  it("should have a scoreSheet hash", function() {
    expect(game.scoreSheet).toEqual(Object({ 1: [  ], 2: [  ], 3: [  ], 4: [  ], 5: [  ], 6: [  ], 7: [  ], 8: [  ], 9: [  ], 10: [  ] }));
  });

  it("should start with the current frame equal to one", function() {
    expect(game.currentFrame).toEqual(1);
  });

  it("should start with a totalScore of zero", function() {
    expect(game.totalScore).toEqual(0);
  });

  describe("#calculateScore", function() {
    it("should add the pins entered to the total score", function() {
      game.calculateScore(4);
      expect(game.totalScore).toEqual(4);
    });
  });

  describe("#addScore", function() {
    it("should add the pins number to the scoreSheet", function() {
      game.addScore(3);
      expect(game.scoreSheet[game.currentFrame]).toEqual([3])
    });
  });

  describe("#frameNumber", function() {
    it("should + 1 to currentFrame if currentFrame in scoreSheet contains 2 numbers", function() {
      game.calculateScore(3);
      game.calculateScore(4);
      game.frameNumber();
      expect(game.currentFrame).toEqual(2);
    });
  });

});
