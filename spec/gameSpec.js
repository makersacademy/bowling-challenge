describe("Game", function () {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  describe("initialization", function() {
    it("should contain ten frames", function () {
      expect(game.frames.length).toEqual(10);
      game.frames.forEach(function (frame) {
        expect(frame instanceof Frame).toBeTruthy();
      });
    });
  });

  describe("playing a game", function() {
    it("does not roll a second roll if a frame is a strike", function() {
      spyOn(game, "bonusRoll").and.callFake(function() { });
      spyOn(Frame.prototype, "getFirstRoll").and.returnValue(10);
      spyOn(Frame.prototype, "secondRoll");
      game.play();
      expect(Frame.prototype.secondRoll).not.toHaveBeenCalled();
    });

    it("creates a bonus if the last frame was a strike", function() {
      spyOn(Frame.prototype, "isStrike").and.returnValue(true);
      game.play();
      expect(game.bonuses[0] instanceof Bonus).toBeTruthy();
    });

    it("creates a bonus if the last frame was a spare", function() {
      spyOn(Frame.prototype, "isSpare").and.returnValue(true);
      game.play();
      expect(game.bonuses[0] instanceof Bonus).toBeTruthy();
    });
  });

  describe("getting the score", function() {
    it("should create a score calculator and pass it the frames and bonuses", function () {
      spyOn(ScoreCalculator.prototype, "totalScore");
      game.getScore();
      expect(ScoreCalculator.prototype.totalScore).toHaveBeenCalled();
    });
  });

  describe("bonus roll", function() {
    it("exists if the tenth frame was a strike or spare", function() {
      spyOn(Frame.prototype, "bonusType").and.returnValue("strike");
      game.bonusRoll();
      expect(game.frames.length).toEqual(11);
    });

    it("rolls twice if the tenth frame was a strike", function() {
      spyOn(Frame.prototype, "bonusType").and.returnValue("strike");
      spyOn(Frame.prototype, "secondRoll");
      game.bonusRoll();
      expect(Frame.prototype.secondRoll).toHaveBeenCalled();
    });

    it("only rolls once if the tenth frame was a spare", function() {
      spyOn(Frame.prototype, "bonusType").and.returnValue("spare");
      spyOn(Frame.prototype, "secondRoll");
      game.bonusRoll();
      expect(Frame.prototype.secondRoll).not.toHaveBeenCalled();
    });
  });

  describe("a perfect game", function() {
    it("returns true if a game had ten strikes", function() {
      spyOn(game, "getScore").and.returnValue(300);
      expect(game.isPerfect()).toBe(true);
    });
  });

  describe("a gutter game", function() {
    it("returns true if a game has a zero score", function() {
      spyOn(game, "getScore").and.returnValue(0);
      expect(game.isGutter()).toBe(true);
    });
  });
});
