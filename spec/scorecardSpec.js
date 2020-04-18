describe('Scorecard', function() {
    var scorecard

    beforeEach(function() {
        scorecard = new Scorecard()
    })

    it('Has a starting score of 0', function() {
        expect(scorecard.totalScore).toEqual(0)
    })

    it('can add a new frame score to their total score', function(){
        scorecard.addNewScore(2, 3)
        expect(scorecard.totalScore).toEqual(5)
    })
})