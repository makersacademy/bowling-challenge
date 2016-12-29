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

    it("expects a frame to have two throws", function() {
        game.newGame();
        game.bowlScore(7);
        game.bowlScore(1);
        expect(game.currentFrame.bowls.length).toEqual(2)
    });

    it("expects a frame throw count to reduce to 0 after two throws",function(){
      game.newGame();
      game.bowlScore(2);
      game.bowlScore(4);
      expect(game.currentFrame.bowlsRemaining).toEqual(0)
    });

    it("expects a score to be recorded in a frame", function() {
        game.newGame();
        game.bowlScore(3)
        game.bowlScore(6);
        expect(game.currentFrame.score()).toEqual(9)
    });

    it("expects a frame to be saved once frame count = 0",function(){
      game.newGame();
      game.bowlScore(3)
      game.bowlScore(6);
      expect(game.scoreSheet.length).toEqual(1)
    });
});
