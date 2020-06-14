describe('scorecard', function() {
  var scorecard
  var score1
  var score2

  beforeEach( function() {
    scores = [score1, score2]
    score1 = jasmine.createSpyObj('score1', ['score']);
    score1.score.and.callFake(function() {
      return (8);
    });
    scores = [score1, score2]
    scorecard = new Scorecard(scores)
  })

  describe('score(1)', function() {
    it('should have total score so far', function() {
      expect(scorecard.score(1)).toEqual(8)
    })
  })
})
