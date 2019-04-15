describe("Javascript bowling score keeper: ", function(){
    var frameSeven, frameEleven, frameSpare, frameStrike;

    frameSeven = [5, 2];
    frameEleven = [5, 6];
    frameSpare = [5, 5];
    frameStrike = [10];

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

    describe("#spare- ", function(){
        it("recognizes spare in a frame", function(){
            game.addFrames(frameSpare);
            expect(game.state).toBe('spare');
        });

        it("totals spare correctly", function(){
            game.addFrames(frameSpare);
            game.addFrames(frameSeven);
            expect(game.score).toBe(22);
        });

        it("handles multiple spares correctly", function(){
            game.addFrames(frameSpare);
            game.addFrames(frameSeven);
            game.addFrames(frameSpare);
            game.addFrames(frameSeven);
            expect(game.score).toBe(44);
        });

        it("handles 3 spares after each other", function(){
            game.addFrames(frameSpare);
            game.addFrames(frameSpare);
            game.addFrames(frameSpare);
            expect(game.score).toBe(40);
        });

        it("totals with no spares", function(){
            game.addFrames(frameSeven);
            game.addFrames(frameSeven);
            game.addFrames(frameSeven);
            expect(game.score).toBe(21);
        });
    });

    describe("#strike- ", function(){

        it('can recognise a strike in a frame', function(){
            game.addFrames(frameStrike);
            expect(game.state).toBe('strike');
        });

        it("totals strike correctly", function(){
            game.addFrames(frameStrike);
            game.addFrames(frameSeven);
            expect(game.score).toBe(24);
        });

        it("handles multiple random strikes correctly", function(){
            game.addFrames(frameStrike);
            game.addFrames(frameSeven);
            game.addFrames(frameStrike);
            game.addFrames(frameSeven);
            expect(game.score).toBe(48);
        });

        it("handles 2 strike after each other", function(){
            game.addFrames(frameStrike);
            game.addFrames(frameStrike);
            game.addFrames(frameSeven);
            expect(game.score).toBe(49);
        });
    });

    describe("#last frame- ", function(){

        it("ends game at last frame", function(){
            for(var i=0; i < 10; i++){
            game.addFrames(frameSeven);
            }
            expect(game.addFrames(frameSeven)).toContain('Error: Game over');
        });

    });
});