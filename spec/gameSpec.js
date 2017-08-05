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
      spyOn(Frame.prototype, "isStrike").and.returnValue(true);
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
    it("should calculate the score from all its frames and bonuses", function () {
      spyOn(Frame.prototype, "getScore").and.returnValue(5);
      spyOn(Bonus.prototype, "getScore").and.returnValue(1);
      game.play();
      game.bonuses.push(new Bonus("strike"));
      expect(game.getScore()).toEqual(51);
    });
  });

  describe("bonus roll", function() {
    it("exists if the tenth frame was a strike or spare", function() {
      spyOn(Frame.prototype, "bonusType").and.returnValue("strike");
      expect(game.bonusRoll()).toBeTruthy();
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
});
