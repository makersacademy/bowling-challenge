describe("Javascript bowling score keeper: ", function(){
    var frameSeven, frameEleven, frameSpare, frameStrike;

    frameSeven = [5, 2];
    frameEleven = [5, 6];
    frameSpare = [5, 5];
    frameStrike = [10, 0];

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
            game.addFrames([frameSeven, frameEleven]);
            expect(game.frame).toContain([frameSeven, frameEleven]);
        });

        it("throws an error if frame score is over 10", function(){
            expect(game.addFrames(frameEleven)).toContain("Error: Frame has incorrect values");
        });

        it("checks if frame contains a spare", function(){
            expect(_isEqualToTen(frameSpare)).toBe(true);
        });

        it("checks if frame does not contain a spare", function(){
            expect(_isEqualToTen(frameEleven)).toBe(false);
        });

        it("checks if one value is enough to pass", function(){
            expect(_isEqualToTen(frameStrike)).toBe(true);
        });
    });
});