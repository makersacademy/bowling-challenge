'use strict';

describe('Scoreboard', function () {

    var scoreboard;
    var roll;

    beforeEach(function () {
        scoreboard = new Scoreboard();
        roll = jasmine.createSpy('roll');
    });

    it('it has no rolls by default', function () {
        expect(scoreboard.rolls()).toEqual([]);
    });

    it('it can add rolls', function () {
        scoreboard.addRoll(roll);
        expect(scoreboard.rolls()).toContain(roll);
    });
});
