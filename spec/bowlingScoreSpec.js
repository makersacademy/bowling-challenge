describe("BowlingScore", function(){

  beforeEach(function(){
    prevRound = jasmine.createSpy('prevRound')
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
      prevRound.plus = ""
      prevRound.currentScore = 5
      bowlingscore.round.currentScore = 3
      bowlingscore.addScore(prevRound)

      expect(bowlingscore.round.currentScore).toEqual(8)
    });

    it("add a plus spare at the previous score", function(){
      bowlingscore.newRound()
      prevRound.plus = "spare"
      prevRound.currentScore = 20
      bowlingscore.round.currentScore = 3
      bowlingscore.round.roll1 = 1
      bowlingscore.addScore(prevRound)

      expect(prevRound.currentScore).toEqual(21)
      expect(bowlingscore.round.currentScore).toEqual(24)
    });

    it("add a plus strike at the previous score", function(){
      bowlingscore.newRound()
      prevRound.plus = "strike"
      prevRound.currentScore = 20
      bowlingscore.round.currentScore = 3
      bowlingscore.addScore(prevRound)

      expect(prevRound.currentScore).toEqual(23)
      expect(bowlingscore.round.currentScore).toEqual(26)
    });
  });
});
