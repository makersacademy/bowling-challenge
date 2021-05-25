describe("Game", function(){
    var game;

    beforeEach(function(){
        game = new Game();
    });

    it('should create a new game', function(){
        expect(game).toBeInstanceOf(Game);
    });

    it('will create a new scorecard', function() {
        expect(game.scorecard).toEqual([]);
    });

    it('will add 2 rolls and the total to the scorecard', function(){
        game.roll(3, 4, 7)
        expect(game.scorecard).toEqual([3, 4, 7])
    });

    it('will add totals of multiple rounds', function() {
        game.roll(3, 4)
        game.roll(9, 0)
        game.roll(6, 2)
        expect(game.scorecard).toEqual([3, 4, 7, 9, 0, 16, 6, 2, 24])
    });

    it('will add the correct bonus for the round following the spare', function()  {
        game.roll(6, 4)
        game.roll(5, 2)
        expect(game.scorecard).toEqual([6, 4, 10, 5, 2, 22])
    });

    it('will add the correct bonus following a strike', function() {
        game.roll(4, 4)
        game.roll(10, 0)
        game.roll(5, 3)
        expect(game.scorecard).toEqual([4, 4, 8, 10, 0, 18, 5, 3, 34])
    });

    it('will be able to cope with consecutive spares', function() {
        game.roll(5, 5)
        game.roll(6, 4)
        game.roll(4, 3)
        expect(game.scorecard).toEqual([5, 5, 10, 6, 4, 26, 4, 3, 37])
    });

    it('will be able to cope with consecutive strikes', function() {
        game.roll(10, 0)
        game.roll(10, 0)
        game.roll(4, 3)
        expect(game.scorecard).toEqual([10, 0, 10, 10, 0, 30, 4, 3, 44])
    });

    it('will return a message if both rolls go in the gutter', function() {
        game.roll(5, 4)
        expect(function() {game.roll(0, 0)}).toThrow("Double Gutter! Bad Luck");
    });


    it('will end when the tenth round ends', function() {
        game.roll(6, 4)
        game.roll(5, 2)
        game.roll(7, 1)
        game.roll(8, 2)
        game.roll(5, 2)
        game.roll(7, 1)
        game.roll(6, 3)
        game.roll(8, 2)
        game.roll(6, 3)
        game.roll(2, 2)
        expect(function() {game.roll(3, 1)}).toThrow("Game Over!");
    });

});