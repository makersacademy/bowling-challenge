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

    it('does not add a roll with a score of < 0', function(){
        scoreboard.addRoll(-1);
        expect(scoreboard.rolls).not.toContain(-1);
    });

    it('does not add a roll with a score of > 10', function(){
        scoreboard.addRoll(11);
        expect(scoreboard.rolls).not.toContain(11);
    });

    describe('second roll', function(){

        it('when added to first roll, the sum does not exceed 10', function(){
            scoreboard.rolls = [4];
            scoreboard.addRoll(7);
            expect(scoreboard.rolls).not.toContain(7);
        });

        it('when to added to a strike, it returns null', function(){
            scoreboard.addRoll(10);
            expect(scoreboard.rolls).toEqual([10, null]);
        });
    });

});
