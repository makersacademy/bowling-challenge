describe("Calculating the score", function() {
  var score;
  beforeEach(function() {
    game = jasmine.createSpyObj('game',['playBall','pinsFromFirstRoll','pinsFromSecondRoll','firstRollScore','secondRollScore'])
    pins = jasmine.createSpyObj('pins',['firstRoll','secondRoll'])
    score = new Score(game);
  })

  it("starts on 0 points", function() {
    expect(score.currentScore).toEqual(0)
  })

  describe("for two rolls without a strike or spare", function() {

    it("adds the sum of two attempts to the score", function() {
      firstRoll = 3;
      secondRoll = 6;
      score.calculateScore(firstRoll,secondRoll);
      expect(score.currentScore).toEqual(9)
    })
  })

})
