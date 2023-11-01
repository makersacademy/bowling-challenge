const ScoreCard = require('./scorecard');


describe('Scorecard - example score', () => {
    // arrange
    const scorecard = new ScoreCard();

    test('Frame 1: [1, 4]; FrameScore: 5; TotalScore: 5', () => {
        scorecard.addFrame(1, 4); //Open
        expect(scorecard.frames).toEqual([
            [1, 4]
        ]);
        expect(scorecard.getFrameTotal(scorecard.frames[0])).toBe(5);
        expect(scorecard.getTotalGameScoreAtFrame(1)).toBe(5);
        expect(scorecard.getTotalGameScore()).toBe(5);
    });

    test('Frame 2: [4, 5]; FrameScore: 9; TotalScore: 14', () => {
        scorecard.addFrame(4, 5); //Open
        expect(scorecard.frames).toEqual([
            [1, 4],
            [4, 5]
        ]);
        expect(scorecard.getFrameTotal(scorecard.frames[1])).toBe(9);
        expect(scorecard.getTotalGameScoreAtFrame(2)).toBe(14);
        expect(scorecard.getTotalGameScore()).toBe(14);
    });

    test('Frame 3: [6, 4] SPARE; FrameScore at F3: 10*; TotalScore at F3: 24', () => {
        scorecard.addFrame(6, 4); //Spare F3
        expect(scorecard.frames).toEqual([
            [1, 4],
            [4, 5],
            [6, 4]
        ]);
        expect(scorecard.getFrameTotal(scorecard.frames[2])).toBe(10);
        expect(scorecard.getTotalGameScoreAtFrame(3)).toBe(24);
        expect(scorecard.getTotalGameScore()).toBe(24);
    });

    test('Frame 4: [5, 5] F3 SPARE BONUS => FrameScore at F3: 15; TotalScore at F3: 29', () => {
        scorecard.addFrame(5, 5); //Spare F4
        // update the frame score for frame 3 to be 15
        expect(scorecard.getFrameTotal(scorecard.frames[2])).toBe(15);
        // update the total score for frame 3 to be 29
        expect(scorecard.getTotalGameScoreAtFrame(3)).toBe(29);
    });

    test('Frame 4: [5, 5] SPARE; FrameScore at F4: 10*; TotalScore at F4: 39', () => {
        expect(scorecard.frames).toEqual([
            [1, 4],
            [4, 5],
            [6, 4],
            [5, 5]
        ]);
        expect(scorecard.getFrameTotal(scorecard.frames[3])).toBe(10);
        expect(scorecard.getTotalGameScoreAtFrame(4)).toBe(39);
        expect(scorecard.getTotalGameScore()).toBe(39);
    });


    test('Frame 5: [10, 0] F4 SPARE BONUS => FrameScore at F4: 20; TotalScore at F4: 49', () => {
        scorecard.addFrame(10, 0); //Strike F5 --- SHOULD I ADD NONE INSTEAD?
        // update the frame score for frame 4 to be 15
        expect(scorecard.getFrameTotal(scorecard.frames[3])).toBe(20);
        // update the total score for frame 4 to be 29
        expect(scorecard.getTotalGameScoreAtFrame(4)).toBe(49);
    });

    test('Frame 5: [10, 0] STRIKE; FrameScore at F5: 10*; TotalScore at F5: 59', () => {
        expect(scorecard.frames).toEqual([
                    [1, 4],
                    [4, 5],
                    [6, 4],
                    [5, 5],
                    [10, 0]
                ]);
        expect(scorecard.getFrameTotal(scorecard.frames[4])).toBe(10);
        expect(scorecard.getTotalGameScoreAtFrame(5)).toBe(59);
        expect(scorecard.getTotalGameScore()).toBe(59);
    });

    test('Frame 6: [0, 1] F5 STRIKE BONUS => FrameScore at F5: 11; TotalScore at F5: 60', () => {
        scorecard.addFrame(0, 1); //Open F6
        // update the frame score for frame 5 to be 11
        expect(scorecard.getFrameTotal(scorecard.frames[4])).toBe(11);
        // update the total score for frame 5 to be 60
        expect(scorecard.getTotalGameScoreAtFrame(5)).toBe(60);
    });

    test('Frame 6: [0, 1]; FrameScore at F6: 1; TotalScore at F6: 61', () => {
        expect(scorecard.frames).toEqual([
                    [1, 4],
                    [4, 5],
                    [6, 4],
                    [5, 5],
                    [10, 0],
                    [0, 1]
                ]);
        expect(scorecard.getFrameTotal(scorecard.frames[5])).toBe(1);
        expect(scorecard.getTotalGameScoreAtFrame(6)).toBe(61);
        expect(scorecard.getTotalGameScore()).toBe(61);
    });

})