describe('Rolls are stored in a game model', function() {

    var game;

    beforeEach(function() {
        game = new Game(Frame);
    });

    it('should know the values for each roll of each frame', function() {
        doOneGameWithoutStrikesOrSpares(game);

        expect(game.frames[0].scores[0]).toEqual(1);
        expect(game.frames[0].scores[1]).toEqual(2);
        expect(game.frames[1].scores[0]).toEqual(3);
        expect(game.frames[1].scores[1]).toEqual(4);
        expect(game.frames[2].scores[0]).toEqual(5);
        expect(game.frames[2].scores[1]).toEqual(1);
        expect(game.frames[3].scores[0]).toEqual(2);
        expect(game.frames[3].scores[1]).toEqual(3);
        expect(game.frames[4].scores[0]).toEqual(4);
        expect(game.frames[4].scores[1]).toEqual(5);
        expect(game.frames[5].scores[0]).toEqual(1);
        expect(game.frames[5].scores[1]).toEqual(2);
        expect(game.frames[6].scores[0]).toEqual(3);
        expect(game.frames[6].scores[1]).toEqual(4);
        expect(game.frames[7].scores[0]).toEqual(5);
        expect(game.frames[7].scores[1]).toEqual(1);
        expect(game.frames[8].scores[0]).toEqual(2);
        expect(game.frames[8].scores[1]).toEqual(3);
        expect(game.frames[9].scores[0]).toEqual(4);
        expect(game.frames[9].scores[1]).toEqual(5);
    });


});
