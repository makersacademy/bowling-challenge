describe('Score', function(){
    var score;

    beforeEach(function(){
        score = new Score();
    })

    it('sum the score of two rolls in the first frame', function(){
        expect(score.singleScoreSum(4,6)).toEqual(10)
    })

    it('adds roll to array', function(){
        score.addRoll(4,5);
        score.addRoll(7,8);
        expect(score.scoreArray.length).toEqual(2);
    })

    it('returns a simple score after 2 rolls'), function(){
        score.addRoll(4,5);
        score.addRoll(7,8);
        expect(score.totalScore(score.scoreArray)).toEqual(24);
    }

})