describe('Scorecard', function() {
    var scorecard

    beforeEach(function() {
        scorecard = new Scorecard()
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

    it('a strike gives 10 points in the current frame', function() {
        scorecard.addNewScore(10)
        expect(scorecard.currentFrame).toEqual([10, 0])
    })

    it('contains an array with the score from the current frame', function() {
        scorecard.addScoreToCurrentFrame(5, 5)
        expect(scorecard.currentFrame).toEqual([5, 5])
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
        scorecard.addNewScore(4, 5)
        expect(scorecard.currentFrameNumber).toEqual(2)
    })

    it('gives the correct frame number if incorrect score is inputted', function() {
        scorecard.addNewScore(2, 3)
        scorecard.addNewScore(6, 7)
        expect(scorecard.currentFrameNumber).toEqual(2)
    })

    ////Updating the previous frame score following a spare/strike
    it('updates the score of the previous frame following a spare', function() {
        scorecard.addNewScore(5, 5)
        scorecard.addNewScore(2, 3)
        expect(scorecard.frameScoreArray).toEqual([12, 5])
    })

    it('updates the score of the previous frame following a strike', function() {
        scorecard.addNewScore(10, 0)
        scorecard.addNewScore(4, 5)
        expect(scorecard.frameScoreArray).toEqual([19, 9])
    })

    it('following 3 consecutive strikes it updates the frame score correctly', function() {
        for (var i = 0; i < 3; i++) {
            scorecard.addNewScore(10, 0)
        }
        expect(scorecard.frameScoreArray).toEqual([30, 20, 10])
    })

    it('following 2 consecutive strikes, and a normal frame, it updates the frame score correctly', function() {
        for (var i = 0; i < 2; i++) {
            scorecard.addNewScore(10, 0)
        }
        scorecard.addNewScore(2, 3)
        expect(scorecard.frameScoreArray).toEqual([22, 15, 5])
    })

    it('following a spare and then 2 consecutive strikes, it updates the frame score correctly', function() {
        scorecard.addNewScore(5, 5)
        for (var i = 0; i < 2; i++) {
            scorecard.addNewScore(10, 0)
        }
        expect(scorecard.frameScoreArray).toEqual([20, 20, 10])
    })

    it('following a normal frame and then 2 consecutive strikes, it updates the frame score correctly', function() {
        scorecard.addNewScore(4, 5)
        for (var i = 0; i < 2; i++) {
            scorecard.addNewScore(10, 0)
        }
        expect(scorecard.frameScoreArray).toEqual([9, 20, 10])
    })

    //10 max frames
    it('cannot have more than 10 frames', function() {
        for (var i = 0; i < 10; i++) {
            scorecard.addNewScore(4, 5)
        }
        expect(scorecard.addNewScore()).toEqual('Game finished, cannot add more frames')
    })

    //10th frame testing
    it('does not count an extra roll if there is no spare or strike in 10th frame', function () {
        for (var i = 0; i < 9; i++) {
            scorecard.addNewScore(0, 0)
        }
        scorecard.addNewScore(4, 4, 5)
        expect(scorecard.frameScoreArray).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 8])
    })

    it('adds extra roll following a spare in the 10th frame', function() {
        for (var i = 0; i < 9; i++) {
        scorecard.addNewScore(0, 0)
        }
        scorecard.addNewScore(5, 5, 5)
        expect(scorecard.frameScoreArray).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 15])
    })

    it('adds extra roll following a strike in the 10th frame', function() {
        for (var i = 0; i < 9; i++) {
        scorecard.addNewScore(0, 0)
        }
        scorecard.addNewScore(10, 4, 3)
        expect(scorecard.frameScoreArray).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 17])
    })

    it('can score perfect game', function() {
        for (var i = 0; i < 9; i++) {
        scorecard.addNewScore(10, 0)
        }
        scorecard.addNewScore(10, 10, 10)
        expect(scorecard.frameScoreArray).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30])
    })

    it('can score a gutter game', function() {
        for (var i = 0; i < 10; i++) {
        scorecard.addNewScore(0, 0)
        }
        expect(scorecard.frameScoreArray).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    })

    //total score tests
    it('calculates the total score after 1 frame', function() {
        scorecard.calculateTotalScore([3])
        expect(scorecard.totalScore).toEqual(3)
    })

    it('calculates the total score after 2 frames', function() {
        scorecard.calculateTotalScore([4, 5])
        expect(scorecard.totalScore).toEqual(9)
    })

    it('can calculate the total score for a full game', function() {
        scorecard.calculateTotalScore([30, 30, 30, 30, 30, 30, 30, 30, 30, 30])
        expect(scorecard.totalScore).toEqual(300)
    })

    it('calculates total score at the end of each frame', function() {
        scorecard.addNewScore(4, 5)
        scorecard.addNewScore(3, 4)
        expect(scorecard.totalScore).toEqual(16)
    })
    //would be nice to add a few further tests here just to show it works with other scores

    it('tells the user their total score at the end of the game', function() {
        scorecard.totalScore = 236
        expect(scorecard.finalScore(scorecard.totalScore)).toEqual("You scored 236")
    })

    it('tells the user if they got a gutter game', function() {
        scorecard.totalScore = 0
        expect(scorecard.finalScore(scorecard.totalScore)).toEqual("GUTTER GAME")
    })

    it('tells the user if they got a perfect score', function() {
        scorecard.totalScore = 300
        expect(scorecard.finalScore(scorecard.totalScore)).toEqual("PERFECT GAME")
    })

})

