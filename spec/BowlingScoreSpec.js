describe("BowlingScore", function() {
    // "use strict";

    var bowlingscore;

    beforeEach(function() {
        bowlingscore = new BowlingScore();
    });

    it("has a score", function() {
        expect(bowlingscore.showTotalScore()).toEqual(0);
    });

    describe("#enterBowlingScore", function() {
        it("can increase the score when score is entered", function() {
            bowlingscore.enterBowlingScore(1);
            bowlingscore.enterBowlingScore(1);
            expect(bowlingscore.showTotalScore()).toEqual(2);
        });

        it("cannot enter a score higher than 10 pins on first bowl", function() {
            expect(function() { bowlingscore.enterBowlingScore(11); }).toThrow("Maximum score is 10")
        });

        it("cannot enter a score higher than a total of 10 pins on second bowl", function() {
            bowlingscore.enterBowlingScore(5);
            expect(function() { bowlingscore.enterBowlingScore(6); }).toThrow("Maximum total score is 10")
        });
    });

    describe("#isThisFirstBowl", function() {
        it("knows if it is the first bowl in a frame", function() {
            expect(bowlingscore.isThisFirstBowl()).toEqual(true);
        });

        it("knows if it is the second bowl in a frame", function() {
            bowlingscore.enterBowlingScore(1);
            expect(bowlingscore.isThisFirstBowl()).toEqual(false);
        });
    });

    describe("#showBowlScore", function() {
        it("can show the individual bowling score - pins knocked down", function () {
            bowlingscore.enterBowlingScore(5);
            bowlingscore.enterBowlingScore(5);
            expect(bowlingscore.showBowlScore(1)).toEqual(5);
            expect(bowlingscore.showBowlScore(2)).toEqual(5);
        });
    });

    describe("#showFrameScore", function() {
      it("can show the total score of first frame", function() {
        bowlingscore.enterBowlingScore(5);
        bowlingscore.enterBowlingScore(5);
        expect(bowlingscore.showFrameScore(1)).toEqual(10);
      });

      it("can show the total score of second frame", function() {
        bowlingscore.enterBowlingScore(2);
        bowlingscore.enterBowlingScore(4);
        bowlingscore.enterBowlingScore(5);
        bowlingscore.enterBowlingScore(5);
        expect(bowlingscore.showFrameScore(2)).toEqual(10);
      });
    });
});
