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

    it('a strike gives 10 points in the current frame', function() {
        scorecard.addNewScore(10)
        expect(scorecard.totalScore).toEqual(10)
    })
})