describe('BowlingGame', function() {

    beforeEach(function() {
        game = new BowlingGame();
    });

    describe('at start', function() {
       it('total score is 0', function() {
           expect(game.totalScore).toEqual(0);
       });
    it('current frame is 1', function() {
        expect(game.currentFrame).toEqual(1);
    })
    });

    describe('#roll', function() {
        it('saves the score of a roll', function() {
            game.roll(7);
            expect(game.currentFrameScore).toEqual(7);
        });

        it('adds scores together', function() {
            game.roll(4);
            game.roll(5);
            expect(game.totalScore).toEqual(9);
        });
    })

    describe('after 2 rolls that are not a spare:', function() {
        beforeEach(function() {
            game.roll(4);
            game.roll(5);
        });
        it('continues to next frame', function() {
            expect(game.currentFrame).toEqual(2);
        });
        it('resets score of current frame to 0', function() {
            expect(game.currentFrameScore).toEqual(0)
        })
    });

    describe('on second roll', function () {
        it('cannot score more than 10 including first roll', function() {
            game.roll(8);
            expect(function() {game.roll(3)}).toThrowError("Only 2 pins left!")
        })
    });

    describe('on strike', function() {
        beforeEach(function() {
            game.roll(10);
        });
        it('goes straight to next frame', function() {
            expect(game.currentFrame).toEqual(2);
        });
        it('adds next two rolls to frame score', function() {
            game.roll(5);
            game.roll(4);
            expect(game.scoreOfFrame(1)).toEqual(19);
        })
    })

    it('can roll gutter game', function() {
        rollMany(20, 0);
        expect(game.totalScore).toEqual(0);
     })

    it('can roll all ones', function() {
        rollMany(20,1);
        expect(game.totalScore).toEqual(20);
    })

    var rollMany = function(rolls, pins) {
        for(i = 0; i < rolls; i++) {
            game.roll(pins);
        };
    };

});