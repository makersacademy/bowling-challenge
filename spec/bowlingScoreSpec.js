describe("BowlingScore", function(){

  beforeEach(function(){
    bowlingscore = new BowlingScore();
    // bowlingscore.prevRound = bowlingscore.newRound()
  });

  describe("newRound", function() {
    it("create a new round", function(){
      bowlingscore.newRound()

      expect(bowlingscore.round).toBeInstanceOf(Round)
    });
  });

  describe("finalScore", function(){
    it("add the new score to previus round", function(){
      bowlingscore.newRound()
      bowlingscore.newRound()
      bowlingscore.prevRound.plus = ""
      bowlingscore.prevRound.score = 5
      bowlingscore.round.currentScore = 3
      bowlingscore.finalScore()

      expect(bowlingscore.round.currentScore).toEqual(8)
    });

    it("add a plus spare at the previous score", function(){
      bowlingscore.newRound()
      bowlingscore.newRound()
      bowlingscore.prevRound.plus = "spare"
      bowlingscore.prevRound.score = 24
      bowlingscore.round.currentScore = 10
      bowlingscore.round.roll1 = 5
      bowlingscore.finalScore()

      expect(bowlingscore.round.currentScore).toEqual(39)
    });

    it("add a plus strike at the previous score", function(){
      bowlingscore.newRound()
      bowlingscore.newRound()
      bowlingscore.prevRound.plus = "strike"
      bowlingscore.prevRound.score = 20
      bowlingscore.round.currentScore = 3
      bowlingscore.finalScore()

      expect(bowlingscore.round.currentScore).toEqual(26)
    });
  });

  describe("bonusRound", function(){
    it("add the bonus round", function(){
      bowlingscore.newRound()
      bowlingscore.round.roll3 = 2
      bowlingscore.round.currentScore = 20
      bowlingscore.bonusRound()

      expect(bowlingscore.round.currentScore).toEqual(22);
    });
  });
});
