describe("RunningScore", function() {

  var runningScore = new RunningScore;

  describe("#newRunningScore", function () {
    it("starts a new game with strikes equalling 0", function() {
      expect(runningScore.strikes).toEqual(0);
    });
    it("starts a new game with spares equalling 0", function() {
      expect(runningScore.spares).toEqual(0);
    });
    it("starts a new game with frame score equalling 0", function() {
      expect(runningScore.score).toEqual(0);
    });
  });

  describe("Spares:", function () {
    var runningScore = new RunningScore;
    it("updates the spares score when a player scores a spare", function() {
      runningScore.spareOrStrike('Spare',5,5);
      expect(runningScore.spares).toEqual(1);
    });
    it("on the next turn, it calculates the running score, and spares equal 0 again", function() {
      runningScore.updateRuningScore(4,1);
      expect(runningScore.spares).toEqual(0);
      expect(runningScore.score).toEqual(19);
    });
  });

  describe("Strikes:", function () {
    var runningScore = new RunningScore;
    it("updates the strikes score when a player scores a strike", function() {
      runningScore.spareOrStrike('Strike',10,0);
      expect(runningScore.strikes).toEqual(1);
    });
    it("on the next turn, it calculates the frame score, and strikes equal 0 again", function() {
      runningScore.updateRuningScore(3,6);
      expect(runningScore.strikes).toEqual(0);
      expect(runningScore.score).toEqual(28);
    });
  })

  describe("No strikes or spares:", function() {
    var runningScore = new RunningScore;
    it("updates the frame score to an integer when no strikes or spares are rolled", function() {
      runningScore.updateRuningScore(2,5);
      expect(runningScore.score).toEqual(7);
    });
  });

  describe("#allBowls", function() {
    var runningScore = new RunningScore;
    it("stores all bowls during a game", function() {
      runningScore.updateRuningScore(2,5);
      runningScore.updateRuningScore(9,1);
      runningScore.updateRuningScore(10,0);
      expect(runningScore.allBowls).toEqual([2,5,9,1,10]);
    });
  });

})
