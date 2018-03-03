describe ("Frame", function() {

    var frame;

    beforeEach(function() {
        frame = new Frame();
    });

    it ("should return 10 if it isStrike", function() {
        frame.addRoll(10);
        expect(frame.toString()).toEqual("[10]");
    });

    it ("framescore returns 7 if roll 1 is 4 and roll 2 is 3", function() {
        frame.addRoll(4);
        frame.addRoll(3);
        expect(frame.frameScore()).toEqual(7);
    });

    it ("should return isDone as true if frame is complete", function() {
        frame.addRoll(4);
        frame.addRoll(3);
        expect(frame.isDone()).toEqual(true);
    });

    it ("should return isStrike as true if first roll is 10", function() {
        frame.addRoll(10);
        expect(frame.isStrike()).toEqual(true);
    });

    it ("should return 10 if it isStrike", function() {
        frame.addRoll(10);
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

    it ("should return 10 as sum of(7,3) if it isSpare", function() {
        frame.addRoll(7);
        frame.addRoll(3);
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

    it("throws an error if pins passed are out of range", function() {
        var error = "Pins should be between 0 and 10 (both inclusive); got 11 pins";
        expect(function() { frame._validateRoll(11); }).toThrow(Error(error));
    });

    it("throws an error if pin passed is not a valid pin", function() {
        expect(function() { frame._validateRoll("&"); }).toThrow(Error("Not a valid pin"));
    });

});
