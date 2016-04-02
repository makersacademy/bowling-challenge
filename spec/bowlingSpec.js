describe("Bowling", function() {
  var game, game2;

  beforeEach(function() {
    game = new Bowling();
    spyOn(game, "frameNumber");
    spyOn(game, "addScore");
    game2 = new Bowling();
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

    it("should call the frameNumber function", function() {
      game.calculateScore();
      expect(game.frameNumber.calls.any()).toEqual(true);
    });

    it("should call the addScore function", function() {
      game.calculateScore();
      expect(game.addScore.calls.any()).toEqual(true);
    });
  });

  describe("#addScore", function() {
    it("should add the pins number to the scoreSheet", function() {
      game2.addScore(3);
      expect(game2.scoreSheet[game2.currentFrame]).toEqual([3])
    });
  });

  describe("#frameNumber", function() {
    it("should + 1 to currentFrame if currentFrame in scoreSheet contains 2 numbers", function() {
      game2.calculateScore(3);
      game2.calculateScore(4);
      game2.frameNumber();
      expect(game2.currentFrame).toEqual(2);
    });
  });

});
