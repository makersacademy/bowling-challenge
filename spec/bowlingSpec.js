var describe, Bowling

describe('Bowling', function () {
    beforeEach(function () {
        bowling = new Bowling();
    });

    it('has a frame', function () {
        expect(bowling.bFrame).toEqual([]);
    });

    it('has a game', function () {
        expect(bowling.game).toEqual([0]);
    });

    it('has a total', function () {
        expect(bowling.total).toBeDefined();
    });

    it('accepts two roll scores into a single frame', function () {
        bowling.roll(8);
        bowling.roll(1);
        expect(bowling.game).toEqual([0, [8, 1]]);
    });

    it('handles gutter ball rolls', function () {
        bowling.roll(0);
        bowling.roll(0);
        expect(bowling.game).toEqual([0, [0, 0]]);
    });

    it('pushes third and fourth roll into next frame', function () {
        bowling.roll(7);
        bowling.roll(2);
        bowling.roll(3);
        bowling.roll(4);
        expect(bowling.game).toEqual([0, [7,2], [3, 4]]);
    });

    xit('can add scores in the game', function () {
        bowling.roll(8);
        bowling.roll(1);       
        bowling.addUpFrame();
        bowling.addUpGame();
        expect(bowling.total).toEqual(9);
    });



});
