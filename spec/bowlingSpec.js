var describe, Bowling;

describe('Bowling', function () {

    beforeEach(function () {
        bowling = new Bowling();
    });

    it('is a game with a maximum of twenty-one bowls', function () {
        expect(bowling.game).toEqual(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    });

    it('finds appropriate frame position for first bowl', function () {
        bowling.roll(8);
        expect(bowling.game[0]).toEqual(8);
    });

    it('finds appropriate frame position for subsequent bowls', function () {
        bowling.roll(8);
        bowling.roll(1);
        expect(bowling.game[1]).toEqual(1);
    });

    it('can add scores in the game', function () {
        bowling.roll(8);
        bowling.roll(1);
        bowling.roll(2);
        expect(bowling.total()).toEqual(11);
    });

    xit('adds bonus of next roll if spare', function () {
        bowling.roll(8);
        bowling.roll(2);
        bowling.roll(6);
        bowling.addUpGame();
        expect(bowling.total).toEqual(22);
    });

    xit('only adds bonus of next roll if spare', function () {
        bowling.roll(8);
        bowling.roll(2);
        bowling.roll(6);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(25);
    });

    xit('fills second roll of frame with null if strike', function () {
        bowling.roll(10);
        expect(bowling.game).toEqual([[10, null]]);
    });

    xit('adds bonus of next two rolls if strike, if next frame is not a strike', function () {
        bowling.roll(10);
        bowling.roll(6);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(28);
    });

    xit('adds bonus of next two rolls if strike, if next frame is a strike', function () {
        bowling.roll(10);
        bowling.roll(10);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(39);
    });

    xit('handles lots of strikes correctly', function () {
        for (var i = 0; i < 9; i++) {
            bowling.roll(10);
        }
        bowling.addUpGame();
        expect(bowling.total).toEqual(240);
    });

    xit('only allows ten frames', function () {
        for (var i = 0; i < 11; i++) {
            bowling.roll(10);
        }
        expect(bowling.game.length).toEqual(10);
    });

    xit('allows three rolls in tenth frame, if strike or spare in first two rolls', function () {
        for (var i = 0; i < 10; i++) {
            bowling.roll(10);
        }
        bowling.roll(2);
        bowling.roll(2);
        expect(bowling.game).toEqual([[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, 2, 2]]);
    });

    xit('scores a game correctly, with three frames in last bowl', function () {
        for (var i = 0; i < 10; i++) {
            bowling.roll(10);
        }
        bowling.roll(2);
        bowling.roll(2);
        bowling.addUpGame();
        expect(bowling.total).toEqual(292);
    });

});




