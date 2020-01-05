'use strict';

describe('Scoreboard', function () {

    var scoreboard;

    beforeEach(function () {
        scoreboard = new Scoreboard();
    });

    it('has no rolls by default', function () {
        expect(scoreboard.rolls).toEqual([]);
    });

    it('can add rolls', function () {
        scoreboard.addRoll(8);
        expect(scoreboard.rolls).toContain(8);
    });

    it('does not add a roll with a score of < 0', function () {
        scoreboard.addRoll(-1);
        expect(scoreboard.rolls).not.toContain(-1);
    });

    it('does not add a roll with a score of > 10', function () {
        scoreboard.addRoll(11);
        expect(scoreboard.rolls).not.toContain(11);
    });

    describe('second roll', function () {

        it('when added to first roll, the sum does not exceed 10', function () {
            scoreboard.rolls = [4];
            scoreboard.addRoll(7);
            expect(scoreboard.rolls).not.toContain(7);
        });

        it('when to added to a strike, it returns null', function () {
            scoreboard.addRoll(10);
            expect(scoreboard.rolls).toEqual([10, null]);
        });
    });

    describe('bonus roll', function () {

        beforeEach(function () {
            scoreboard.rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, null, 0, 1, 7, 3, 6, 4, 10, null]
        });

        it('happens if roll 1 of frame 10 is 10 points', function () {
            scoreboard.addRoll(10);
            scoreboard.addRoll(6);
            scoreboard.addRoll(4);
            expect(scoreboard.rolls.slice(18, 21)).toEqual([10, 6, 4]);
        });

        it('happens if both rolls in frame 10 total 10 points', function () {
            scoreboard.addRoll(4);
            scoreboard.addRoll(6);
            scoreboard.addRoll(7);
            expect(scoreboard.rolls.slice(18, 21)).toEqual([4, 6, 7])
        });

        it('happens if both rolls in frame 10 are 10 points each', function () {
            scoreboard.addRoll(10);
            scoreboard.addRoll(10);
            scoreboard.addRoll(7);
            expect(scoreboard.rolls.slice(18, 21)).toEqual([10, 10, 7])
        });

        it('does not happen if both rolls in frame 10 total > 10 points', function () {
            scoreboard.addRoll(4);
            scoreboard.addRoll(7);
            scoreboard.addRoll(7);
            expect(scoreboard.rolls.slice(19, 21)).not.toContain(7)
        });

        it('does not happen if both rolls in frame 10 total < 10 points', function () {
            scoreboard.addRoll(4);
            scoreboard.addRoll(5);
            scoreboard.addRoll(7);
            expect(scoreboard.rolls.slice(20)).not.toContain(7);
        });

        it('does not happen in a sequence of 10, 6, 7', function () {
            scoreboard.addRoll(10);
            scoreboard.addRoll(6);
            scoreboard.addRoll(7);
            expect(scoreboard.rolls.slice(20)).not.toContain(7);
        });

    });

    describe('get a frame score', function () {

        it('scores a regular frame', function () {
            expect(scoreboard.getFrameScore([2, 4], [])).toEqual(6);
        });

        it('scores a spare frame', function () {
            expect(scoreboard.getFrameScore([6, 4], [4])).toEqual(14);
        });

        it('scores a strike frame followed by a regular frame', function () {
            expect(scoreboard.getFrameScore([10, null], [4, 3])).toEqual(17);
        });

        it('scores a strike frame followed by a strike frame', function () {
            expect(scoreboard.getFrameScore([10, null], [10, null, 5])).toEqual(25);
        });

        it('should show score after a strike', function () {
            expect(scoreboard.getFrameScore([10, null], [])).toEqual(NaN);
        });
    });

    describe('get every frame scores', function () {

        beforeEach(function () {
            scoreboard.rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, null, 0, 1, 7, 3, 6, 4, 10, null, 2, 8, 6]
        });

        it("get all frames' score", function () {
            expect(scoreboard.getAllFrameScores()).toEqual([
                5, 14, 29, 49, 60, 61, 77, 97, 117, 133
            ]);
        });
    });

});
