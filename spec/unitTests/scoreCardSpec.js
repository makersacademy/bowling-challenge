describe('ScoreCard', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
    });

    describe('#sum', function() {
        it('can return one number not in an array', function() {
            expect(scoreCard.sum(1)).toEqual(1);
        });

        it('can sum two numbers in an array', function() {
            expect(scoreCard.sum([1, 2])).toEqual(3);
        });

        it('can sum three numbers in an array', function() {
            expect(scoreCard.sum([1, 2, 3])).toEqual(6);
        });
    });

    describe('#allFrames', function() {
        it('returns all the frames of the game', function() {
            expect(scoreCard.allFrames()).toEqual(scoreCard._game.frames);
        });
    });

    describe('#pushAllElements', function() {
        it('cycles through array2\'s elements and pushes them to array1', function() {
            var array1 = [0, 1, 2, 3, 4];
            var array2 = [5, 6, 7, 8, 9];
            scoreCard.pushAllElements(array1, array2);
            var expectation = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            expect(array1).toEqual(expectation);
        });
    });


    describe('#isGutterGame', function() {
        it('can detect a gutter game', function() {
            var i;
            for (i = 0; i < 10; i++) {
              scoreCard.allFrames()[i].scores = [0, 0]
            };
            expect(scoreCard.total()).toEqual(0)
            expect(scoreCard.IsGutterGame()).toBe(true)
        });

        it('does not falsely register a gutter game when the game simply has not yet finished', function() {
            var i;
            for (i = 0; i < 5; i++) {
              scoreCard.allFrames()[i].scores = [0, 0]
            };
            expect(scoreCard.total()).toEqual(0)
            expect(scoreCard.IsGutterGame()).toBe(false)
        });

        it('does not falsely register a gutter game when only one of the scores per frame is 0', function() {
            var i;
            for (i = 0; i < 10; i++) {
              scoreCard.allFrames()[i].scores = [0, 5]
            };
            expect(scoreCard.total()).toEqual(50)
            expect(scoreCard.IsGutterGame()).toBe(false)
        });
    });

    describe('#IsPerfectGame', function() {
        it('can detect a perfect game', function() {
            var i;
            for (i = 0; i < 9; i++) {
              scoreCard.allFrames()[i].scores = [10, 10]
            };
            scoreCard.allFrames()[9].scores = [10, 10, 10]
            expect(scoreCard.IsPerfectGame()).toBe(true)
        });

        it('awards 300 points', function() {
            var i;
            for (i = 0; i < 9; i++) {
              scoreCard.allFrames()[i].scores = [10]
            };
            scoreCard.allFrames()[9].scores = [10, 10, 10]
            console.log(scoreCard.total())
            expect(scoreCard.total()).toEqual(300)
        });
    });

});
