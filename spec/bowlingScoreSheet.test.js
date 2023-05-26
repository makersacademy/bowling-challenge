const BowlingScoreSheet = require('../lib/bowlingScoreSheet');
const Frame = require('../lib/frame');


describe('BowlingScoreSheet', () =>{
    it('initially returns an array of one frame',()=>{
        const scoreSheet = new BowlingScoreSheet();
        expect(scoreSheet.frames).toEqual([new Frame()]);
    });

    it('creates a new frame on the first roll', () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(1);
        expect(scoreSheet.frames[1].scores[0]).toBe(1);
        expect(scoreSheet.frames[1].calculateScore).toBe(1);

    });

    it("adds to the last frame on the second roll (assuming first roll wasn't a strike)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(1);
        scoreSheet.addRoll(2);
        expect(scoreSheet.frames[1].scores[0]).toBe(1);
        expect(scoreSheet.frames[1].scores[1]).toBe(2);
        expect(scoreSheet.frames[1].calculateScore).toBe(3);
    });

    it("creates a new frame on the third roll (assuming no rolls have been a strike)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(1);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(4);
        expect(scoreSheet.frames[1].scores[0]).toBe(1);
        expect(scoreSheet.frames[1].scores[1]).toBe(2);
        expect(scoreSheet.frames[1].calculateScore).toBe(3);
        expect(scoreSheet.frames[2].scores[0]).toBe(4);
        expect(scoreSheet.frames[2].calculateScore).toBe(4);
    });

    it("calculates a full game with no strikes or spares", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 20 ; i++){
            scoreSheet.addRoll(1);
        };
        expect(scoreSheet.frames[1].scores[0]).toBe(1);
        expect(scoreSheet.frames[1].scores[1]).toBe(1);
        expect(scoreSheet.frames[1].calculateScore).toBe(2);

        expect(scoreSheet.frames[10].scores[0]).toBe(1);
        expect(scoreSheet.frames[10].scores[1]).toBe(1);
        expect(scoreSheet.frames[10].calculateScore).toBe(2);

        expect(scoreSheet.calculateScore()).toBe(20);

    });

    it("calculates a zero-scoring game", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 20 ; i++){
            scoreSheet.addRoll(0);
        };
        expect(scoreSheet.frames[1].scores[0]).toBe(0);
        expect(scoreSheet.frames[1].scores[1]).toBe(0);
        expect(scoreSheet.frames[1].calculateScore).toBe(0);

        expect(scoreSheet.frames[10].scores[0]).toBe(0);
        expect(scoreSheet.frames[10].scores[1]).toBe(0);
        expect(scoreSheet.frames[10].calculateScore).toBe(0);

        expect(scoreSheet.calculateScore()).toBe(0);

    });

    it("calculates a game with one spare (not in the 10th frame)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(2);
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };

        expect(scoreSheet.calculateScore()).toBe(29);

    });

    it("calculates a game with multiple spares (not in the 10th frame)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(2);
        for (i = 0; i < 16 ; i++){
            scoreSheet.addRoll(1);
        };

        expect(scoreSheet.calculateScore()).toBe(45);
    });

    it("calculates a game with a strike (not in the 10th frame)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(10);
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };

        expect(scoreSheet.calculateScore()).toBe(30);
    });

    it("calculates a game with multiple strikes (not in the 10th frame)", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(10);
        for (i = 0; i < 14 ; i++){
            scoreSheet.addRoll(1);
        };

        expect(scoreSheet.calculateScore()).toBe(77);
    });

    it("calculates a game with one spare in the 10th frame", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(3);
        expect(scoreSheet.calculateScore()).toBe(31);

    });

    it("calculates a game with one strike in the 10th frame", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(3);
        expect(scoreSheet.calculateScore()).toBe(33);

    });

    it("calculates a perfect game", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 12 ; i++){
            scoreSheet.addRoll(10);
        };
        expect(scoreSheet.calculateScore()).toBe(300);

    });

    it("calculates a game with a mix of strikes and spares", () =>{
        const scoreSheet = new BowlingScoreSheet();
        scoreSheet.addRoll(1);
        scoreSheet.addRoll(4);
        scoreSheet.addRoll(4);
        scoreSheet.addRoll(5);
        scoreSheet.addRoll(6);
        scoreSheet.addRoll(4);
        scoreSheet.addRoll(5);
        scoreSheet.addRoll(5);
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(0);
        scoreSheet.addRoll(1);
        scoreSheet.addRoll(7);
        scoreSheet.addRoll(3);
        scoreSheet.addRoll(6);
        scoreSheet.addRoll(4);
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(6);

        expect(scoreSheet.calculateScore()).toBe(133);
    });

    it("determines a game is incomplete if less than 10 frames", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 10 ; i++){
            scoreSheet.addRoll(1);
        };
        expect(scoreSheet.complete()).toBe(false);
    });

    it("determines a game is incomplete if 10 frames have been played but still needs 2 bonus rolls after a strike", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(10);
        expect(scoreSheet.complete()).toBe(false);
    });

    it("determines a game is incomplete if 10 frames have been played but still needs 1 bonus roll after a strike", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(2);
        expect(scoreSheet.complete()).toBe(false);
    });

    it("determines a game is incomplete if 10 frames have been played but still needs 1 bonus roll after a spare", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(2);

        expect(scoreSheet.complete()).toBe(false);
    });

    it("determines a game is complete after 10 frames have been played and no bonus", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 20 ; i++){
            scoreSheet.addRoll(1);
        };
        expect(scoreSheet.complete()).toBe(true);
    });

    it("determines a game is complete after 10 frames have been played and 1 bonus has been played after a spare", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(8);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(3);
        expect(scoreSheet.complete()).toBe(true);
    });

    it("determines a game is complete after 10 frames have been played and 2 bonuses has been played after a strike", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 18 ; i++){
            scoreSheet.addRoll(1);
        };
        scoreSheet.addRoll(10);
        scoreSheet.addRoll(2);
        scoreSheet.addRoll(3);
        expect(scoreSheet.complete()).toBe(true);
    });

    it("determines a game is complete after 10 frames have been played and both bonus rolls have been strikes", () =>{
        const scoreSheet = new BowlingScoreSheet();
        for (i = 0; i < 12 ; i++){
            scoreSheet.addRoll(10);
        };
        
        expect(scoreSheet.complete()).toBe(true);
    });


});