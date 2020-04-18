describe('Scorecard', function() {
    var scorecard

    beforeEach(function() {
        scorecard = new Scorecard()
    })

    it('Has a starting score of 0', function() {
        expect(scorecard.totalScore).toEqual(0)
    })

    it('can add a new frame score to their total score', function() {
        scorecard.addNewScore(2, 3)
        expect(scorecard.totalScore).toEqual(5)
    })

    it('a strike gives 10 points in the current frame', function() {
        scorecard.addNewScore(10)
        expect(scorecard.totalScore).toEqual(10)
    })

    it('if there is not a spare isSpare returns false', function() {
        expect(scorecard.isSpare).toEqual(false)
    })

    it('if there is a spare, isSpare returns true', function() {
        scorecard.addNewScore(5, 5)
        expect(scorecard.isSpare).toEqual(true)
    })

    //it('raises an error if the total of the 1st and 2nd rolls are more than 10', function() {
    //    expect(scorecard.addNewScore(5, 6)).toThrow('Incorrect score')
    //})
    
})