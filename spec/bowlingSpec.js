var describe, Bowling;

describe('Bowling', function () {
    beforeEach(function () {
        bowling = new Bowling();
    });

    it('has a game', function () {
        expect(bowling.game).toEqual([]);
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

    it('pushes this roll into new frame', function () {
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

    it('adds bonus first roll of next frame if spare', function () {
        bowling.roll(8);
        bowling.roll(2);
        bowling.roll(6);
        bowling.addUpGame();
        expect(bowling.total).toEqual(22);
    });

    it('does not add bonus second roll of next frame if spare', function () {
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
});




