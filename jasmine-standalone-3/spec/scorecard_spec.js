describe("Scorecard", function() {
  var scorecard;
  var rolls;
  beforeEach(function() {
    rolls = [[1,4],[4,5],[6,'/'],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]];
    scorecard = new Scorecard(rolls);
  });

  describe("#cleanse", function() {
    it("returns a cleansed rolls array", function() {
      rolls = [['x', 0],[4,5],[6,'/'],[5,'/'],[10,0],[0,'/'],[7,'/'],[6,4],[0,'X'],[2,'/','x']];
      scorecard = new Scorecard(rolls);
      rolls = scorecard.getRolls()
      expect(rolls[0]).toEqual([10, 0])
      expect(rolls[2]).toEqual([6, 4])
      expect(rolls[3]).toEqual([5, 5])
      expect(rolls[5]).toEqual([0, 10])
      expect(rolls[6]).toEqual([7, 3])
      expect(rolls[8]).toEqual([10, 0])
      expect(rolls[9]).toEqual([2, 8, 10])
    })
    it("returns a cleansed rolls array three final strikes", function() {
      rolls = [['x', 0],[4,5],[6,'/'],[5,'/'],[10,0],[0,'/'],[7,'/'],[6,4],[0,'X'],['x','X','x']];
      scorecard = new Scorecard(rolls);
      rolls = scorecard.getRolls()
      expect(rolls[9]).toEqual([10, 10, 10])
    })
  })

  describe("#score", function() {
    it("returns the correct score", function() {
      expect(scorecard.score(rolls)).toEqual(133)
    })
  })
  describe("#frameScore", function() {
    it("returns the score of a certain frame", function() {
      expect(scorecard.frameScore(3)).toEqual(15);
      expect(scorecard.frameScore(5)).toEqual(11);
      expect(scorecard.frameScore(7)).toEqual(16);
      expect(scorecard.frameScore(10)).toEqual(16);
    })
  })
  describe("#frameOutcome", function() {
    it("returns the outcome of a certain frame", function() {
      expect(scorecard.frameOutcome(1)).toEqual('-')
      expect(scorecard.frameOutcome(2)).toEqual('/')
      expect(scorecard.frameOutcome(4)).toEqual('X')
    })
  })
})
