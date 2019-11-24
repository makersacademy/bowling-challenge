describe('Score', function(){
    var score;

    beforeEach(function(){
        score = new Score();
    })

    it('sum the score of two rolls in the first frame', function(){
        expect(score.singleScoreSum([4,6])).toEqual(10)
    })

    it('adds roll to array', function(){
        score.addRoll(4,5);
        score.addRoll(7,8);
        expect(score.scoreArray.length).toEqual(2);
    })

    it('returns a simple score after 2 rolls'), function(){
        score.addRoll(4,5);
        score.addRoll(7,8);
        score.addRoll(3,3);
        expect(score.totalScore(score.scoreArray)).toEqual(30);
    }

    describe('isStrike', function(){
        it('returns true if the first roll is 10'), function(){
            expect(score.isStrike([10,0])).toBe(true)
        }
    })

    describe('isSpare', function(){
        it('returns true if the sum of the two rolls is 10'), function(){
            expect(score.isSpare([8,2])).toBe(true)
        }
    })

    it('returns the score after a spike', function(){
        score.addRoll(4,6);
        expect(score.totalScore(score.scoreArray)).toEqual(10);
        score.addRoll(3,0);
        expect(score.totalScore(score.scoreArray)).toEqual(16);
    })

    it('returns the score after a spike', function(){
        score.addRoll(10,0);
        expect(score.totalScore(score.scoreArray)).toEqual(10);
        score.addRoll(3,5);
        expect(score.totalScore(score.scoreArray)).toEqual(26);
    })
})