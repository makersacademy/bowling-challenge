var describe, Bowling;

describe('Bowling', function () {
    beforeEach(function () {
        bowling = new Bowling();
    });

    it('has a game', function () {
        expect(bowling.game).toEqual([[],[],[],[],[],[],[],[],[],[]]);
    });

    it('has a total', function () {
        expect(bowling.total).toBeDefined();
    });

    it('accepts first roll into first space in frame', function () {
        bowling.roll(8);
        expect(bowling.game).toEqual([[8]]);
    });

    it('accepts two roll scores into a single frame', function () {
        bowling.roll(8);
        bowling.roll(1);
        expect(bowling.game).toEqual([[8, 1]]);
    });

    it('pushes third roll into new frame', function () {
        bowling.roll(7);
        bowling.roll(2);
        bowling.roll(3);
        expect(bowling.game).toEqual([[7,2], [3]]);
    });

    it('pushes fourth roll into same frame', function () {
        bowling.roll(7);
        bowling.roll(2);
        bowling.roll(3);
        bowling.roll(4);
        expect(bowling.game).toEqual([[7,2], [3, 4]]);
    });

    it('can add scores in the game', function () {
        bowling.roll(8);
        bowling.roll(1);
        bowling.roll(2);
        bowling.addUpGame();
        expect(bowling.total).toEqual(11);
    });

    it('adds bonus of next roll if spare', function () {
        bowling.roll(8);
        bowling.roll(2);
        bowling.roll(6);
        bowling.addUpGame();
        expect(bowling.total).toEqual(22);
    });

    it('only adds bonus of next roll if spare', function () {
        bowling.roll(8);
        bowling.roll(2);
        bowling.roll(6);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(25);
    });

    it('fills second roll of frame with null if strike', function () {
        bowling.roll(10);
        expect(bowling.game).toEqual([[10, null]]);
    });

    it('adds bonus of next two rolls if strike, if next frame is not a strike', function () {
        bowling.roll(10);
        bowling.roll(6);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(28);
    });

    it('adds bonus of next two rolls if strike, if next frame is a strike', function () {
        bowling.roll(10);
        bowling.roll(10);
        bowling.roll(3);
        bowling.addUpGame();
        expect(bowling.total).toEqual(39);
    });

    it('handles lots of strikes correctly', function () {
        for (var i = 0; i < 9; i++) {
            bowling.roll(10);
        }
        bowling.addUpGame();
        expect(bowling.total).toEqual(240);       
    });

    it('only allows ten frames', function () {
        for (var i = 0; i < 11; i++) {
            bowling.roll(10);
        }
        expect(bowling.game.length).toEqual(10);
    });

    it('allows three rolls in tenth frame, if strike or spare in first two rolls', function () {
        for (var i = 0; i < 10; i++) {
            bowling.roll(10);
        }
        bowling.roll(2);
        bowling.roll(2);
        expect(bowling.game).toEqual([[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, null],[10, 2, 2]]);
    });

    it('scores a game correctly, with three frames in last bowl', function () {
        for (var i = 0; i < 10; i++) {
            bowling.roll(10);
        }
        bowling.roll(2);
        bowling.roll(2);
        bowling.addUpGame();
        expect(bowling.total).toEqual(292); 
    });

});




