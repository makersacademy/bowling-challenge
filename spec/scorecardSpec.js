describe('Scorecard', function() {
    var scorecard

    beforeEach(function() {
        scorecard = new Scorecard()
    })

    it('Has a starting score of 0', function() {
        expect(scorecard.totalScore).toEqual(0)
    })
})