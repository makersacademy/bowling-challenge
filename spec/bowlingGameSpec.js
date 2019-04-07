describe("Javascript bowling score keeper: ", function(){

    beforeEach(function() {
        game = new bowlingGame();
    });

    describe("#game- ", function(){

        it("starts a new game", function(){
            expect(game.score).toBe(0);
        });

        it("keeps track of frames", function(){
            expect(game.frame.length).toBe(0);
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

    describe("#frame- ", function(){

        it("can add frames", function(){
            var frames = [[4, 2], [3, 1]];
            game.addFrames(frames);
            expect(game.frame).toContain([[4, 2], [3, 1]]);
        });

        it("throws an error if frame score is over 10", function(){
            var frame = [7, 4];
            expect(game.addFrames(frame)).toContain("Error: Frame has incorrect values");
        });

        it("checks if frame contains a spare", function(){
            var frame = [5, 5];
            expect(_isEqualToTen(frame)).toBe(true);
        });

        it("checks if frame does not contain a spare", function(){
            var frame = [5, 6];
            expect(_isEqualToTen(frame)).toBe(false);
        });

        it("checks if one value is enough to pass", function(){
            var frame = [10, 0];
            expect(_isEqualToTen(frame)).toBe(true);
        })
    });
});