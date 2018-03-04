describe("Game", function() {
  var game, TestFrameConstructor, testFrame;
  beforeEach(function() {
    TestFrameConstructor = jasmine.createSpy("TestFrameConstructor");
    TestFrameConstructor.prototype.roll = function(number) { return number; };
    game = new Game("Alice", TestFrameConstructor);
  });

  it("is initialised with a score 0", function() {
    expect(game.score).toEqual(0);
  });

  it("is intialised with an empty array of frames", function() {
    expect(game.frames).toEqual([]);
  });

  it("is initialised with the player's name", function() {
    expect(game.player).toEqual("Alice");
  });

  it("is initialised with this.multipliers = [1, 1]", function() {
    expect(game.multipliers).toEqual([1, 1]);
  });

  it("is initialised with frameConstructor", function() {
    expect(game.frameConstructor).toEqual(TestFrameConstructor);
  });

  describe(".roll()", function() {
    let pinsKnocked;

    beforeEach(function() {
      testFrame = jasmine.createSpyObj("testFrame", ["roll", "isComplete"]);
      spyOn(game, "_updateMultipliers").and.returnValue(true);
      spyOn(game, "_updateScore").and.returnValue(true);
      game.frames.push(testFrame);
      pinsKnocked = 5;
    });

    it("calls .roll(pinsKnocked) on the most recent frame", function() {
      game.roll(pinsKnocked);

      expect(testFrame.roll).toHaveBeenCalledWith(pinsKnocked);
    });

    it("calls this._createOrContinueFrame()", function() {
      spyOn(game, "_createOrContinueFrame");
      game.roll(pinsKnocked);

      expect(game._createOrContinueFrame).toHaveBeenCalledWith();
    });

    it("calls this._updateFrameNumber", function() {
      spyOn(game, "_updateFrameNumber").and.callThrough();
      game.roll(pinsKnocked);

      expect(game._updateFrameNumber).toHaveBeenCalledWith();
    });

    it("calls this._updateMultipliers", function() {
      game.roll(pinsKnocked);

      expect(game._updateMultipliers).toHaveBeenCalledWith();
    });

    it("calls this._updateScore", function() {
      game.roll(pinsKnocked);

      expect(game._updateScore).toHaveBeenCalledWith();
    });
  });

  describe("._createOrContinueFrame", function() {
    describe("when a frame is not in progress", function() {
      it("creates a new frame and adds it to this.frames", function() {
        expect(game._createOrContinueFrame()).toEqual(jasmine.any(TestFrameConstructor));
      });
    });

    describe("when a frame is in progress", function() {
      it("Returns the existing frame", function() {
        testFrame = jasmine.createSpy("unfinishedFrame");
        testFrame.isComplete = function() { return false; };
        game.frames.push(testFrame, testFrame);

        expect(game._createOrContinueFrame()).toEqual(testFrame);
      });
    });
  });

  describe("._updateMultipliers", function() {
    beforeEach(function() {
      testFrame = jasmine.createSpy("frame");
      game.frameNumber = 1;
      testFrame.multipliers = [2, 2];
      game.frames.push(testFrame);
    });

    it("updates the multipliers with those from the last frame if that frame is complete", function() {
      testFrame.isComplete = function() { return true; };
      game._updateMultipliers();

      expect(game.multipliers).toEqual(testFrame.multipliers);
    });

    it("does not change multipliers if last frame is not complete", function() {
      let previousMultipliers = game.multipliers;
      testFrame.isComplete = function() { return false; };
      game._updateMultipliers();

      expect(game.multipliers).toEqual(previousMultipliers);
    });
  });

  describe("_updateScore()", function() {
    beforeEach(function() {
      testFrame = jasmine.createSpy("frame");
      game.frameNumber = 1;
      testFrame.score = 17;
      game.score = 12;
      game.frames.push(testFrame);
    });

    it("updates the score when the last frame is complete", function() {
      testFrame.isComplete = function() { return true; };
      game._updateScore();

      expect(game.score).toEqual(29);
    });

    it("does not update the score when the last frame is incomplete", function() {
      testFrame.isComplete = function() { return false; };
      game._updateScore();

      expect(game.score).toEqual(12);

    });
  });

  describe("._isStartOfFinalFrame", function() {
    beforeEach(function() {
      testFrame = jasmine.createSpy("frame");
      game.frameNumber = 9;
      for(var i = 0; i < 9; i++) {
        game.frames.push(testFrame);
      }
    });

    it("returns true when the final frame starts", function() {
      testFrame.isComplete = function() { return true; };

      expect(game._isStartOfFinalFrame()).toEqual(true);
    });

    it("returns false otherwise", function() {
      testFrame.isComplete = function() { return false; };

      expect(game._isStartOfFinalFrame()).toEqual(false);
    });
  });
});
