describe('Frame', function() {
    beforeEach(function() {
        frame = new Frame;
    });

    var completedFrame = function() {
        for(let i = 1; i <=2; i ++) {
            frame.storeRoll();
        }
        frame.totalRolls(2)
        frame.newFrame()
        frame.maxFrames(1)
    };

    it ('should be an array of total rolls - starting with zero', function() {
        expect(frame.totalRolls()).toEqual(0)
    });

    it ('should be able to roll and have that stored to the array', function() {
        frame.storeRoll(1)
        expect(frame.totalRolls()).toEqual(1)
    });

    it('sets up the next frame', function() {
        for(let i = 1; i <=2; i ++) {
            frame.storeRoll();
        }
        frame.totalRolls(2)
        frame.newFrame()
        expect(frame.totalRolls()).toEqual(0)
    });

    it ('limits number of frames to no more than 10', function() {
        for(let i = 1; i <=10; i ++) {
            completedFrame();
        }
        expect(frame.maxFrames()).toEqual(10)
    });



    it ('starts a new game when 10 frames are played', function() {
        for(let i = 1; i <=11; i ++) {
            completedFrame();
        }
        expect(frame.maxFrames()).toEqual(10)
    });
});