describe('Bowling', function() {
    var bowling;

    beforeEach(function() {
        game = new Bowling();
    });

    it("expects a score sheet to exist", function() {
        expect(game.scoreSheet).toBeDefined()
    });

    it("expects a frame to exist", function() {
        expect(game.currentFrame).toBeDefined()
    });

    it("expects a frame to have a number of bowls", function() {
        game.newGame()
        expect(game.currentFrame.bowlsRemaining).toEqual(2)
    });

    it("expects a score to be recorded in a frame", function() {
        game.newGame();
        game.bowlScore(3)
        game.bowlScore(6);
        expect(game.currentFrame.score()).toEqual(9)
    });


});
