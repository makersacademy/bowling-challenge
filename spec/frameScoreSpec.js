describe("FrameScore", function() {

  var scoreLogic = new ScoreLogic;
  var frameScore = new FrameScore(scoreLogic);

  describe("#newFrameScore", function () {
    it("starts a new game with strikes equalling 0", function() {
      expect(frameScore.strikes).toEqual(0);
    });
    it("starts a new game with spares equalling 0", function() {
      expect(frameScore.spares).toEqual(0);
    });
    it("starts a new game with frame score equalling 0", function() {
      expect(frameScore._currentScore).toEqual(0);
    });
  });

  describe("Spares:", function () {
    it("updates the spares score when a player scores a spare", function() {
      frameScore.score('Spare');
      expect(frameScore.spares).toEqual(1);
    });
    it("on the next turn, it calculates the running score, and spares equal 0 again", function() {
      frameScore.continue(4,1);
      expect(frameScore.spares).toEqual(0);
      expect(frameScore._currentScore).toEqual(19);
    });
  });

  describe("Strikes:", function () {
    it("updates the strikes score when a player scores a strike", function() {
      frameScore.score('Strike');
      expect(frameScore.strikes).toEqual(1);
    });
    it("on the next turn, it calculates the frame score, and strikes equal 0 again", function() {
      frameScore.continue(3,6);
      expect(frameScore.strikes).toEqual(0);
      expect(frameScore._currentScore).toEqual(28);
    });
  })

  describe("No strikes or spares:", function() {
    it("updates the frame score to an integer when no strikes or spares are rolled", function() {
      frameScore.continue(2,5);
      expect(frameScore._currentScore).toEqual(35);
    });
  });

})
