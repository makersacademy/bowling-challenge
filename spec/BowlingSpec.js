"use strict";

describe("Bowling", function() {
    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    });

    describe("when initialiasing", function() {
        it("starts with 0 frame", function() {
            expect(bowling.frame).toEqual(0);
        });
    });

    describe("#getAllScores()", function() {
        it("returns the array of the scores", function() {
            bowling.possiblePins(9);
            bowling.possiblePins(8);
            bowling.possiblePins(5);
            bowling.possiblePins(4);
            expect(bowling.getAllScores()).toEqual([9, 8, 5, 4]);
        });
    });

    describe("#getScoresTotalEvery2Elements()", function() {
        it("returns the array of the total of every 2 elements", function() {
            bowling.possiblePins(9);
            bowling.possiblePins(8);
            bowling.possiblePins(5);
            bowling.possiblePins(4);
            expect(bowling.getScoresTotalEvery2Elements()).toEqual([17, 9]);
        });
    });
});