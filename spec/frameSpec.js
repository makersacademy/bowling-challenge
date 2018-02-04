describe ("Frame", function() {
    
    var frame; 

    beforeEach(function() {
        frame = new Frame();
    });

    it ("framescore returns 7 if roll 1 is 4 and roll 2 is 3", function() {
        frame.addRoll(4);
        frame.addRoll(3);
        expect(frame.frameScore()).toEqual(7);
    });

    it ("should return isStrike as true if first roll is 10", function() {
        frame.addRoll(10);
        expect(frame.isStrike()).toEqual(true);
        expect(frame.rollValues()).toEqual([10]);
    });

    it ("should return isStrike as false if first roll is not 10", function() {
        frame.addRoll(5);
        expect(frame.isStrike()).toEqual(false);
    });

    it ("should return isSpare as true if sum of roll 1 & 2 of a frame is 10", function() {
        frame.addRoll(7);
        frame.addRoll(3);
        expect(frame.isSpare()).toEqual(true);
        expect(frame.rollValues()).toEqual([7,3]);
    });

    it ("should return isSpare as false if sum of roll 1 & 2 of a frame is not 10", function() {
        frame.addRoll(6);
        frame.addRoll(3);
        expect(frame.isSpare()).toEqual(false);
    });

    it ("adds pins to the pins array", function() {
        frame.addRoll(7);
        frame.addRoll(2);
        expect(frame.rollValues()).toEqual([7,2]);
    });
    
});