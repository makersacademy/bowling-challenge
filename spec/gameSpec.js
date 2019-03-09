describe('game', function() {
    it('has 10 frames', function() {
        game = new Game();
        expect(game.frames.length).toEqual(10);
    });
});