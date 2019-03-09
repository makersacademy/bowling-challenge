describe('game', function() {

    beforeEach(function() {
        game = new Game();
    });

    describe('game flow', function() { 
        it('has 10 frames', function() {
            expect(game.frames.length).toEqual(10);
        });

        it('starts with the first bowl of the first frame', function() {
            expect(game.currentFrame).toEqual(0);
            expect(game.currentBowl).toEqual(1);
        });

        it('skips the 2nd bowl of a frame if it is not allowed (a strike)', function() {
            game.roll(10);
            expect(game.currentFrame).toEqual(1);
            expect(game.currentBowl).toEqual(1);
        });
    });

    describe('scoring', function() {
        it('has a score that is the total of the frame scores (0 before any frames played)', function() {
            expect(game.getTotalScore()).toEqual(0);
        });

        it('has a score that is the total of the frame scores (7 after 1 frame completed with score 7)', function() {
            game.roll(3);
            game.roll(4);
            expect(game.getTotalScore()).toEqual(7);
        });

        it('has a score that is the total of the frame scores (12 after frame1 was 7 and frame2 was 5)', function() {
            game.roll(3);
            game.roll(4);
            game.roll(1);
            game.roll(4);
            expect(game.getTotalScore()).toEqual(12);
        });

        it('checks whether the 1st frame is awaiting a bonus after the 1st bowl of the 2nd frame', function() {
            spyOn(game, 'giveBonuses');
            game.roll(9);
            game.roll(1);
            game.roll(2);
            expect(game.giveBonuses).toHaveBeenCalled();
        });

        it('has a score that is the total of the frame scores (17 after frame1 was a spare and frame2 was 2 + 3)', function() {
            game.roll(9);
            game.roll(1);
            game.roll(2);
            game.roll(3);
            expect(game.getTotalScore()).toEqual(17);
        });

    //    it('checks whether the 1st frame is awaiting a bonus after the 2nd bowl of the 2nd frame', function() {
    //         spyOn(game, 'giveBonuses');
    //         game.roll(10);
    //         game.roll(5);
    //         game.roll(2);
    //         expect(game.giveBonuses).toHaveBeenCalled();
    //     }); 
    });
});