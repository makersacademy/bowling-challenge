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

    describe("#play", function() {
        it("enters score and update scoreBoard when called", function() {
            bowling.play(9)
            bowling.play(1)
            bowling.play(3)
            bowling.play(4)
            bowling.play(4)
            bowling.play(4)
            expect(bowling.scores).toEqual([10, 7, 8]);
            expect(bowling.scoreBoard).toEqual([
                [9, 1],
                [3, 4],
                [4, 4],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null],
                [null, null]
            ]);
        })
    })

});

var b = new Bowling();
b.play(3);
b.play(4);
b.play(10);
b.play(6);
b.play(3);
b.play(5);
b.scoreBoard;