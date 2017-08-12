describe("BowlingScore", function() {
    "use strict";

    var bowlingscore;

    beforeEach(function() {
        bowlingscore = new BowlingScore();
    });

    it("has a score", function() {
        expect(bowlingscore.showTotalScore()).toEqual(0);
    });

    describe("#enterBowlingScore", function() {
        it("can increase the score when score is entered", function() {
            bowlingscore.enterBowlingScore(1)
            expect(bowlingscore.showTotalScore()).toEqual(1)
        });

        it("cannot enter a score higher than 10", function() {
            expect(function() { bowlingscore.enterBowlingScore(11); }).toThrow("Maximum score is 10")
        });
    });
});
