describe('game', function() {

    beforeEach(function() {
        game = new Game();
    });

    it('has 10 frames', function() {
        expect(game.frames.length).toEqual(10);
    });

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
});