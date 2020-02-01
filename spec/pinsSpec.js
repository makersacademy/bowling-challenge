"use strict"

describe("Pins", function() {
    var pins;

    beforeEach(function() {
        pins = new Pins();
    });

    describe("#knockDownPins()", function() {
        it("returns a value more than or equal to 0", function() {
            expect(pins.knockDownPins()).toBeGreaterThan(-1);
        });

        it("returns a value less than  or equal to 10", function() {
            expect(pins.knockDownPins()).toBeLessThan(11);
        });

        it("returns fixed number if argument is fed in", function() {
            expect(pins.knockDownPins(9)).toEqual(9);
            expect(pins.knockDownPins(3)).toEqual(3);
        });
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
    })
})