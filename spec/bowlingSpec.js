var describe, Bowling

describe('Bowling', function () {
    beforeEach(function () {
        bowling = new Bowling();
    });

    it('has a total', function () {
        expect(bowling.total).toBeDefined();
    });

    it('has a game', function () {
        expect(bowling.game).toEqual([0]);
    });

    it('can accept a roll score', function () {
        bowling.roll(8);
        expect(bowling.game).toEqual([0, 8]);
    });

    it('can add scores in the game', function () {
        bowling.roll(8);
        bowling.addUp();
        expect(bowling.total).toEqual(8);
    });

});
