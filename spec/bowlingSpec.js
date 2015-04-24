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
        bowling.roll(1);       
        bowling.addUpFrame();
        bowling.addUpGame();
        expect(bowling.total).toEqual(9);
    });

    it('allows two rolls per frame', function () {
        bowling.roll(7);
        bowling.roll(2);
        bowling.roll(3);
        expect(bowling.bFrame).toEqual([7,2]);
    });

});
