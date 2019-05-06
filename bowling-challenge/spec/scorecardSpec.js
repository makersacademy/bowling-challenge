
describe('scorecard', function() {

  var scorecard

  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter game', function(){
    it('ends game', function() {
      expect(scorecard.isOver).toBe(true)
    })
    it('with a score of 0', function() {
      expect(scorecard.score).toEqual(0)
    })
  })

})
