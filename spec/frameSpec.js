var Frame = require('../src/frame.js');

describe("Frame", function() {

    beforeEach(function() {
        frame = new Frame();
    });

    it("is an instance of Frame", function() {
        expect(frame).toEqual(jasmine.any(Frame));
    });

    it("has methods to set and get the first score", function() {
        frame.setFirstScore(3);
        expect(frame.getFirstScore()).toBe(3);
    });

    it("has a methods to set and get the second score", function() {
        frame.setSecondScore(4);
        expect(frame.getSecondScore()).toBe(4);
    });

    it("will return null from getSecondScore() if first score was a strike", function(){
        frame.setFirstScore(10);
        expect(frame.getSecondScore()).toEqual(null);
    });

    it("will return true from isStrike() if the first score was a strike", function() {
        frame.setFirstScore(10);
        expect(frame.isStrike()).toEqual(true);
    });

    it("will not allow the second score to be entered if the first score was a stike", function() {
        frame.setFirstScore(10);
        var errorMessage =  frame.setSecondScore(3);
        expect(errorMessage).toEqual(null);
        expect(frame.getSecondScore()).toEqual(null);
    });

    it("will return true from isSpare() if the second + first score adds up to ten", function() {
        frame.setFirstScore(3);
        frame.setSecondScore(7);
        expect(frame.isSpare()).toEqual(true);
    });

    it("will return 'pending' from getFinalFrameScore() if finalised() returns false", function() {
        expect(frame.getFinalFrameScore()).toEqual("pending");
    });

    it("will return a number between 0-9 from getFinalFrameScore() if first and second scores add up to less than ten", function(){
        frame.setFirstScore(3);
        frame.setSecondScore(6);
        expect(frame.getFinalFrameScore()).toEqual(9);
    });

    it("will return true from isFinalised() if scores one and two add up to less than 10", function(){
        frame.setFirstScore(3);
        frame.setSecondScore(6);
        expect(frame.isFinalised()).toEqual(true);
    });

    it("will return true from isFinialised() if setFinalFrameScore() has been called", function(){
        frame.setFinalFrameScore(22);
        expect(frame.isFinalised()).toEqual(true);
    });

    it("can say that it is a regular frame (i.e. not a strike or spare)", function(){
        frame.setFirstScore(3);
        frame.setSecondScore(4);
        expect(frame.isRegular()).toEqual(true);
    });


    it("will return false from isRegular() if it is a strike", function(){
        frame.setFirstScore(10);
        expect(frame.isRegular()).toEqual(false);
    });

    it("will return false from isRegular() if it is a spare", function(){
        frame.setFirstScore(3);
        frame.setSecondScore(7);
        expect(frame.isRegular()).toEqual(false);
    });



    it("will return false from isFinialised() if isSpare() or isStrike() returns true and setFinalFrameScore() has not been called ", function() {
        frame.spare = true;
        expect(frame.isFinalised()).toEqual(false);
        frame.spare = false;
        frame.strike = true;
        expect(frame.isFinalised()).toEqual(false);
        frame.setFinalFrameScore(24);
        expect(frame.isFinalised()).toEqual(true);
    });

});

