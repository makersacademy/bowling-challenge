var bowling = new Bowling();

describe('Bowling', function() {

    it('it has a starting score of 0', function () {
        expect(bowling.score).toEqual(0);
    });

    it('it has a starting frame of 0', function () {
        expect(bowling.frame).toEqual(0);
    });

});
