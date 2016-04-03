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

  describe("#pinsKnockedDown", function() {
    it("should add the pins entered to the total score", function() {
      game.pinsKnockedDown(4);
      expect(game.totalScore).toEqual(4);
    });

    it("should call the frameNumber function", function() {
      game.pinsKnockedDown();
      expect(game.frameNumber.calls.any()).toEqual(true);
    });

    // it("should call the addScore function", function() {
    //   game.pinsKnockedDown();
    //   expect(game.addScore.calls.any()).toEqual(true);
    // });
  });

  // describe("#addScore", function() {
  //   it("should add the pins number to the scoreSheet", function() {
  //     game2.addScore(3);
  //     expect(game2.scoreSheet[game2.currentFrame]).toEqual([3])
  //   });
  // });

  describe("#frameNumber", function() {
    it("should + 1 to currentFrame if currentFrame in scoreSheet contains 2 numbers", function() {
      game2.pinsKnockedDown(3);
      game2.pinsKnockedDown(4);
      game2.frameNumber();
      expect(game2.currentFrame).toEqual(2);
    });
  });

  describe("#isStrike", function() {
    it("should return true if previous frame pins equal 10", function() {
      game2.pinsKnockedDown(10);
      expect(game2.strike).toEqual(true);
    });
  });

  describe("#isSpare", function() {
    it("returns true if currentFrame in scoreSheet adds to 10", function() {
      game2.pinsKnockedDown(5);
      game2.pinsKnockedDown(5);
      expect(game2.spare).toEqual(true);
    });
  });

});
