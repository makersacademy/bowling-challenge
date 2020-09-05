
describe('Bowling', function(){
    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    })

    it('starts score at 0', function() {
        expect(bowling.getCurrentScore()).toEqual(0)
    })

    describe('rolls', function() {
        it('updates the score after one frame with two rolls', function() {
            bowling.roll(4, 5)
            expect(bowling.getCurrentScore()).toEqual(9)
        })

        it('updates the score after one frame with one roll', function() {
            bowling.roll(10)
            expect(bowling.getCurrentScore()).toEqual(10)
        })

        it('updates the score after multiple frames', function() {
            bowling.roll(10)
            bowling.roll(4, 5)
            expect(bowling.getCurrentScore()).toEqual(19)
        })
    })
    
})