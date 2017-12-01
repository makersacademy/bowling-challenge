describe('Bowling Game', function() {
    it('has 10 frames', function() {
        var game = new Game();
        expect(game.frames.length).toEqual(10);
    });
});