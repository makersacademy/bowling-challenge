describe("Javascript bowling score keeper: ", function(){
    describe("#game- ", function(){

        beforeEach(function() {
            game = new bowlingGame();
        });

        it("starts a new game", function(){
            expect(game.score).toBe(0);
        });

        it("keeps track of frames", function(){
            expect(game.frame).toBe(0);
        });

        it("stores name of 1 player", function(){
            game.addPlayers('Mr the Dude');
            expect(game.players[0]).toBe('Mr the Dude');
        });

        it("stores a string of names", function(){
            game.addPlayers('Mr the Dude');
            game.addPlayers('Al Bundy');
            game.addPlayers('Homer Simpson');
            game.addPlayers('Fred Flintstone');
            expect(game.players).toEqual(['Mr the Dude', 'Al Bundy', 'Homer Simpson', 'Fred Flintstone']);
        });
    });
});