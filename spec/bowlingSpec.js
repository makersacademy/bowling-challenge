describe("Bowling", function() {
  var spyGame, game1;

  beforeEach(function() {
    game1 = new Bowling();
    spyGame = new Bowling();
    spyOn(spyGame, "frameNumber");
    spyOn(spyGame, "pinsKnockedDown");
    spyOn(spyGame, "isSpare");
    spyOn(spyGame, "isStrike");
    spyOn(spyGame, "changeBowlNum");
  })

  it("should start with the current frame equal to one", function() {
    expect(game1.currentFrame).toEqual(1);
  });

  it("should start with a totalScore of zero", function() {
    expect(game1.totalScore).toEqual(0);
  });

  it("should start with firstBowl set to zero", function() {
    expect(game1.firstBowl).toEqual(0);
  });

  it("should start with secondBowl set to zero", function() {
    expect(game1.secondBowl).toEqual(0);
  });

  it("should start with strike set to false", function() {
    expect(game1.strike).toEqual(false);
  });

  it("should start with spare set to false", function() {
    expect(game1.spare).toEqual(false);
  });

  it("should start with finalFrame set to false", function() {
    expect(game1.finalFrame).toEqual(false);
  });


  describe("#pinsKnockedDown", function() {
    it("should add the pins entered to the firstBowl variable", function() {
      game1.pinsKnockedDown(4);
      expect(game1.firstBowl).toEqual(4);
    });

    it("should add the pins entered to the secondBowl variable", function() {
      game1.currentBowl = 2;
      game1.pinsKnockedDown(5);
      expect(game1.secondBowl).toEqual(5);
    });

  });

  describe("#addScore", function() {
    it("should call pinsKnockedDown", function() {
      expect(spyGame.pinsKnockedDown.calls.any()).toEqual(false);
      spyGame.addScore(3);
      expect(spyGame.pinsKnockedDown.calls.any()).toEqual(true);
    });

    it("should add pins to the total score if not strike or spare", function() {
      game1.addScore(4);
      expect(game1.totalScore).toEqual(4);
    });

    it("should call isSpare", function() {
      expect(spyGame.isSpare.calls.any()).toEqual(false);
      spyGame.addScore(2);
      expect(spyGame.isSpare.calls.any()).toEqual(true);
    });

    it("should call isStrike", function() {
      expect(spyGame.isStrike.calls.any()).toEqual(false);
      spyGame.addScore(8);
      expect(spyGame.isStrike.calls.any()).toEqual(true);
    });

    it("should call frameNumber", function() {
      expect(spyGame.frameNumber.calls.any()).toEqual(false);
      spyGame.addScore(3);
      expect(spyGame.frameNumber.calls.any()).toEqual(true);
    });

    it("should call changeBowlNum", function() {
      expect(spyGame.changeBowlNum.calls.any()).toEqual(false);
      spyGame.addScore(7);
      expect(spyGame.changeBowlNum.calls.any()).toEqual(true);
    });

  });

  describe("#frameNumber", function() {
    it("should + 1 to currentFrame if currentBowl equals two", function() {
      game1.addScore(3);
      game1.addScore(4);
      expect(game1.currentFrame).toEqual(2);
    });

    it("should + 1 to currentFrame if strike", function() {
      game1.addScore(10);
      expect(game1.currentFrame).toEqual(2);
    });
  });

  describe("#isStrike", function() {
    it("should return true pins equal 10", function() {
      game1.addScore(10);
      expect(game1.strike).toEqual(true);
    });
  });

  describe("#isSpare", function() {
    it("returns true if firstBowl and secondBowl add to 10", function() {
      game1.addScore(5);
      game1.addScore(5);
      expect(game1.spare).toEqual(true);
    });
  });

  describe("#changeBowlNum", function() {
    it("should change bowl number to 2 after the first turn", function() {
      game1.changeBowlNum();
      expect(game1.currentBowl).toEqual(2);
    });

    it("should change bowl number to 1 after second turn", function() {
      game1.changeBowlNum();
      game1.changeBowlNum();
      expect(game1.currentBowl).toEqual(1);
    });

    it("should keep bowl number as 1 if strike", function() {
      game1.addScore(10);
      expect(game1.currentBowl).toEqual(1);
    })
  });

  describe("#resetBowlScores", function() {
    it("should reset the firstBowl to 0", function() {
      game1.firstBowl = 2;
      game1.resetBowlScores();
      expect(game1.firstBowl).toEqual(0);
    });

    it("should reset the secondBowl to 0", function() {
      game1.secondBowl = 7;
      game1.resetBowlScores();
      expect(game1.secondBowl).toEqual(0);
    });
  });

  describe("#isFinalFrame", function() {
    it("should change finalFrame to true if currentFrame === 10", function() {
      game1.currentFrame = 10;
      game1.isFinalFrame();
      expect(game1.finalFrame).toEqual(true);
    });
  });

});
