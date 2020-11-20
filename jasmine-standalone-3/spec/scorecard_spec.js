describe("Scorecard", function() {
  var scorecard;
  var rolls;
  beforeEach(function() {
    rolls = [[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]];
    scorecard = new Scorecard(rolls);
  });

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
