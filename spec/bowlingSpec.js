describe('Bowling', function() {

var bowling;

beforeEach(function() {
bowling = new Bowling();
});

describe('before each game starts', function() {

    it('starts with a score of 0', function() {
       expect(bowling.getScore()).toEqual([]);
    });

    it('starts with a frame count of 0', function() {
        expect(bowling.checkFrameCount()).toEqual(0);

    });


});









})