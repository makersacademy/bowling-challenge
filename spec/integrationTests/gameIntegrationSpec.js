describe('Game', function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    describe('#roll', function() {

        it('should perform a roll on the correct frame', function() {
            var i;
            for (i = 0; i < 10; i++) {
                spyOn(game.frames[i], 'roll').and.callThrough();
            }
            doOneGameWithStrikes(game);

            expect(game.frames[0].roll).toHaveBeenCalledWith(10);
            expect(game.frames[1].roll).toHaveBeenCalledWith(3);
            expect(game.frames[1].roll).toHaveBeenCalledWith(4);
            expect(game.frames[2].roll).toHaveBeenCalledWith(5);
            expect(game.frames[2].roll).toHaveBeenCalledWith(1);
            expect(game.frames[3].roll).toHaveBeenCalledWith(2);
            expect(game.frames[3].roll).toHaveBeenCalledWith(3);
            expect(game.frames[4].roll).toHaveBeenCalledWith(4);
            expect(game.frames[4].roll).toHaveBeenCalledWith(5);
            expect(game.frames[5].roll).toHaveBeenCalledWith(1);
            expect(game.frames[5].roll).toHaveBeenCalledWith(2);
            expect(game.frames[6].roll).toHaveBeenCalledWith(10);
            expect(game.frames[7].roll).toHaveBeenCalledWith(10);
            expect(game.frames[8].roll).toHaveBeenCalledWith(2);
            expect(game.frames[8].roll).toHaveBeenCalledWith(3);
            expect(game.frames[9].roll).toHaveBeenCalledWith(4);
            expect(game.frames[9].roll).toHaveBeenCalledWith(5);
        });

    });

    describe ('#run', function() {

        it('performs an entire game based on an array of all the rolls', function() {
            var basicGameWithoutStrikesOrSpares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
            spyOn(game, 'roll').and.callThrough();
            game.run(basicGameWithoutStrikesOrSpares);
            var frameThreeScores = [2, 3];
            expect(game.frames[3].scores).toEqual(frameThreeScores);
            var frameEightScores = [2, 3];
            expect(game.frames[8].scores).toEqual(frameEightScores);
        });

    });

});
