"use strict";

describe("Bowling", function() {
    var bowling;

    beforeEach(function() {
        bowling = new Bowling();
    });

    describe("when initialiasing", function() {
        it("starts with 0 score", function() {
            expect(bowling.getScore()).toEqual(0);
        });
    });

    describe("#randScore()", function() {
        // it("returns random value between 1 to 10", function() {
        // spyOn(bowling, "randScore").and.callFake(function() {
        //     return 1;
        // });
        // console.log(bowling.getScore());
        // spyOn(bowling, "randScore")
        //     .and.returnValue(9)
        //     .and.callThrough();
        // expect(bowling.getScore()).toEqual(9);
        // });
        it("returns a value more than or equal to 0", function() {
            expect(bowling.randScore()).toBeGreaterThan(-1);
        });

        it("returns a value less than  or equal to 10", function() {
            expect(bowling.randScore()).toBeLessThan(11);
        });

        it("returns fixed number if argument is fed in", function() {
            bowling.randScore(9);
            expect(bowling.getScore()).toEqual(9);
        });
    });
});