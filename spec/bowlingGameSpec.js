describe("Javascript bowling score keeper: ", function(){
    describe("#game- ", function(){

        it("starts a new game", function(){
            game = new bowlingGame();
            expect(game.score).toBe(0);
        });

        it("keeps track of frames", function(){
            game = new bowlingGame();
            expect(game.frame).toBe(0);
        });

        it("stores name of 1 player", function(){
            game = new bowlingGame();
            game.addPlayers('theDude');
            expect(game.players[0]).toBe('theDude');
        });
    });
});