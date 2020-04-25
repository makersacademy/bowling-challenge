describe('Scorecard', function() {
    var scorecard

    beforeEach(function() {
        scorecard = new Scorecard()
    })

    //it('can add a new frame score to their total score', function() {
    //    scorecard.addNewScore(2, 3)
    //    expect(scorecard.totalScore).toEqual(5)
    //})

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

    //it('calculates the score', function() {
    //    scorecard.calculateScore(5, 5)
    //    expect(scorecard.totalScore).toEqual(10)
    //})

    it('a strike gives 10 points in the current frame', function() {
        scorecard.addNewScore(10)
        expect(scorecard.currentFrame).toEqual([10, 0])
    })

    it('contains an array with the score from the current frame', function() {
        scorecard.addScoreToCurrentFrame(5, 5)
        expect(scorecard.currentFrame).toEqual([5, 5])
    })

    it('doubles the score of first roll if player scored a spare in the last round', function() {
        //would be better to set isSpare to equal true with a double.
        scorecard.addNewScore(5, 5)
        scorecard.addNewScore(3, 3)
        expect(scorecard.currentFrame).toEqual([6, 3])
    })

    it('doubles the score of both rolls if player scored a strike in the last round', function() {
        //would be better to set isSpare to equal true with a double.
        scorecard.addNewScore(10, 0)
        scorecard.addNewScore(3, 3)
        expect(scorecard.currentFrame).toEqual([6, 6])
    })

    it('clears the current fame', function() {
        scorecard.currentFrame = [5, 6]
        scorecard.clearCurrentFrame()
        expect(scorecard.currentFrame).toEqual([])
    })

    it('frames starts empty', function() {
        expect(scorecard.allFrames).toEqual([])
    })

    it('adds current frame to all frames', function() {
        scorecard.addCurrentToAllFrames([3, 2])
        expect(scorecard.allFrames).toEqual([[3, 2]])
    })

    it('add new score goes to all frames', function() {
        scorecard.addNewScore(4, 3)
        expect(scorecard.allFrames).toEqual([[4, 3]])
    })

    it('is an array of arrays', function() {
        scorecard.addNewScore(4, 3)
        scorecard.addNewScore(4, 5)
        expect(scorecard.allFrames).toEqual([[4, 3], [4, 5]])
    })

    it('Has a starting score of 0', function() {
        expect(scorecard.totalScore).toEqual(0)
    })

    //add describe block here to organise these tests better

    it('calculates the total score', function() {
        scorecard.calculateTotalScore([[3, 4]])
        expect(scorecard.totalScore).toEqual(7)
    })

    it('calculates the total score', function() {
        scorecard.calculateTotalScore([[3, 4], [2, 2]])
        expect(scorecard.totalScore).toEqual(11)
    })

    it('calculates the total score', function() {
        scorecard.addNewScore(4, 5)
        expect(scorecard.totalScore).toEqual(9)
    })

    it('calculates the total score', function() {
        scorecard.addNewScore(4, 5)
        scorecard.addNewScore(3, 4)
        expect(scorecard.totalScore).toEqual(16)
    })

    /////new tests
    it('calculates the frame score', function() {
        expect(scorecard.calculateFrameScore(4, 5)).toEqual(9)
    })

    it('adds frame score to frame score array', function() {
        scorecard.addNewScore(3, 4)
        expect(scorecard.frameScoreArray).toEqual([7])
    })

    ////to make current frame number so can access correct element in array
    it('gives current frame number', function() {
        scorecard.addNewScore(2, 3)
        expect(scorecard.currentFrameNumber).toEqual(1)
    })



})






