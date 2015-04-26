var describe, Bowling;

describe('Bowling', function () {
    beforeEach(function () {
        bowling = new Bowling();
    });

    it('has a frame', function () {
        expect(bowling.bFrame).toEqual([]);
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
        bowling.roll(5);  
        bowling.addUpGame();
        expect(bowling.total).toEqual(16);
    });



});
