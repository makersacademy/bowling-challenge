"use strict";

describe('Scoreboard', function() {
    var game, score

    beforeEach(function() {
        game = jasmine.createSpyObj('game', ['checkRollOne', 'checkRollTwo']);
        score = new Scoreboard(game);
    });

    it('Returns the score of a gutter game', function() {
        spyOn(this._game,'checkRollOne').and.returnValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        spyOn(this._game,'checkRollTwo').and.returnValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        expect(score.total(game)).toEqual(0);
    });
});
