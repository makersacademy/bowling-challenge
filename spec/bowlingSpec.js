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

describe('for each new frame played', function() {

    it('increments the frame count by one', function() {
        bowling.newFrame(3,2);
        expect(bowling.checkFrameCount()).toEqual(1);

    });
});












})