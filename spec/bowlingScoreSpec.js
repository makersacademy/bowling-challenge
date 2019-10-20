describe("BowlingScore", function(){

  beforeEach(function(){
    bowlingscore = new BowlingScore();
  });

  describe("newRound", function() {
    it("create a new round", function(){
      bowlingscore.newRound()

      expect(bowlingscore.round).toBeInstanceOf(Round)
    });
  });

  describe("addScore", function(){
    it("add the new score to previus round", function(){
      bowlingscore.newRound()
      bowlingscore.round.currentScore = 3
      bowlingscore.addScore("", 5)

      expect(bowlingscore.round.currentScore).toEqual(8)
    });

    it("add a plus spare at the previous score", function(){
      bowlingscore.newRound()
      bowlingscore.round.currentScore = 10
      bowlingscore.round.roll1 = 5
      bowlingscore.addScore("spare", 24)

      expect(bowlingscore.round.currentScore).toEqual(39)
    });

    it("add a plus strike at the previous score", function(){
      bowlingscore.newRound()
      bowlingscore.round.currentScore = 3
      bowlingscore.addScore("strike", 20)

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
