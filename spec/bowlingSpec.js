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


    it('should add each roll to the score', function(){
        bowling.newFrame(3,2);
        expect(bowling.getScore()).toEqual([[3,2]]);

    });
});

it('should give a total score', function() {
    bowling.newFrame(4,5);
    bowling.newFrame(3,2);
    expect(bowling.totalScore()).toEqual(14);

});

it('should return "spare!" if the rolls in a frame total 10', function(){
    expect(bowling.isSpare(5,5)).toEqual('Spare!');
    
});












})