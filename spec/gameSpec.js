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

        it('skips the 2nd bowl of a frame if it is not allowed (a strike but not last frame)', function() {
            game.roll(10);
            expect(game.currentFrame).toEqual(1);
            expect(game.currentBowl).toEqual(1);
        });

        it('does not skip the 2nd bowl if it is allowed in the final frame (after a strike)', function() {
            for (var i = 0; i < 10; i++) {
                game.roll(10);
            }
            expect(game.currentFrame).toEqual(9);
            expect(game.currentBowl).toEqual(2);
        });

        it('ends with a 3rd roll on the final frame if it is allowed (after a strike on 1st bowl)', function() {
            for (var i = 0; i < 10; i++) {
                game.roll(10);
            }
            game.roll(2);
            expect(game.currentFrame).toEqual(9);
            expect(game.currentBowl).toEqual(3);
        });

        it('ends with a 3rd roll on the final frame if it is allowed (after a spare on 2nd bowl)', function() {
            for (var i = 0; i < 9; i++) {
                game.roll(10);
            }
            game.roll(2);
            game.roll(8);
            expect(game.currentFrame).toEqual(9);
            expect(game.currentBowl).toEqual(3);
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

       it('checks whether the 1st frame is awaiting a bonus after the 2nd bowl of the 2nd frame', function() {
            game.roll(10);
            game.roll(5);
            spyOn(game, 'giveBonuses');
            game.roll(2);
            expect(game.giveBonuses).toHaveBeenCalled();
        }); 

        it('has a score that is the total of the frame scores (20 after frame1 was a strike and frame2 was 2 + 3)', function() {
            game.roll(10);
            game.roll(2);
            game.roll(3);
            expect(game.getTotalScore()).toEqual(20);
        });

        it('has a score that is the total of the frame scores (42 if first 2 frames are strikes and frame3 was 2 + 3', function() {
            game.roll(10);
            game.roll(10);
            game.roll(2);
            game.roll(3);
            expect(game.getTotalScore()).toEqual(42);
        });
    });
});