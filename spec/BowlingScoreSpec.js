describe("BowlingScore", function() {
    "use strict";

    var bowlingscore;

    beforeEach(function() {
        bowlingscore = new BowlingScore();
    });

    it("has a score", function() {
        expect(bowlingscore.showTotalScore()).toEqual(0);
    });
});
