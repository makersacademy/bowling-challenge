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

    it('if there is not a strike, isStrike returns false', function() {
        expect(scorecard.isStrike).toEqual(false)
    })

    it('if there is a strike, isStrike returns true', function() {
        scorecard.addNewScore(10)
        expect(scorecard.isStrike).toEqual(true)
    })

    it('can change from spare to a strike', function() {
        scorecard.addNewScore(3, 7)
        scorecard.addNewScore(10)
        expect(scorecard.isStrike).toEqual(true)
        expect(scorecard.isSpare).toEqual(false)
    })

    it('can change from strike to spare', function() {
        scorecard.addNewScore(10)
        scorecard.addNewScore(4, 6)
        expect(scorecard.isSpare).toEqual(true)
        expect(scorecard.isStrike).toEqual(false)
    })

    it('tells the user if they have entered an incorrect score', function() {
        expect(scorecard.incorrectScore()).toEqual("Incorrect Score")
    })

    it('user told if they enter incorrect score', function() {
        expect(scorecard.addNewScore(11)).toEqual('Incorrect Score')
    })

    it('calculates the score', function() {
        expect(scorecard.calculateScore(5, 5)).toEqual(10)
    })
})

describe('Frame', function() {
    var frame1

    beforeEach(function() {
        frame1 = new Frame()
    })

    it('contains an array with the score from the current frame', function() {
        frame1.addScoreToCurrentFrame(5, 5)
        expect(frame1.currentFrame).toEqual([5, 5])
    })
    
})