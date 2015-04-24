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

    it('can accept a roll score', function () {
        bowling.roll(8);
        expect(bowling.bFrame).toEqual([8]);
    });

    it('can add scores in the game', function () {
        bowling.roll(8);
        bowling.addUpFrame();
        bowling.addUpGame();
        expect(bowling.total).toEqual(8);
    });

    it('knows the previous number in the frame', function () {
        bowling.roll(7);
        bowling.roll(2);
        expect(bowling.previousRoll).toEqual(9);
    });

    xit('allows two rolls per frame', function () {
        bowling.roll(6);
        bowling.roll(3);
        bowling.roll(1);
        expect(bowling.game).toEqual([0,6,3]);
    });

    // is this right? really, it's more about knowing the total of the frame.

});
