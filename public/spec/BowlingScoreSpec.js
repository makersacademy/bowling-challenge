describe("BowlingScore", function() {
    "use strict";

    var bowlingscore;

    beforeEach(function() {
        bowlingscore = new Bowling();
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

    describe("#endOfGame", function() {
        it("can not enter a score after 10 frames if 10th frame is not a strike or a spare", function() {
            for (var i = 0; i < 20; i++) {
                bowlingscore.enterBowlingScore(2);
            }
        expect(function() { bowlingscore.enterBowlingScore(2); }).toThrow("End of Game!");
        });
    });

    describe("#strike", function() {
        it("if a strike, the next score will be entered into the first bowl of the next frame", function() {
            bowlingscore.enterBowlingScore(10);
            expect(bowlingscore.isThisFirstBowl()).toEqual(true);
            bowlingscore.enterBowlingScore(3);
            expect(bowlingscore.showBowlScore(3)).toEqual(3);
        });

        it("if a strike, the next 2 bowl scores will be added to the total score of the frame where the strike occured", function() {
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(3);
            bowlingscore.enterBowlingScore(3);
            expect(bowlingscore.showFrameScore(1)).toEqual(16);
        });

        it("if a strike, the next 2 bowl scores will be added to the totalscore", function() {
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(3);
            bowlingscore.enterBowlingScore(3);
            expect(bowlingscore.showTotalScore()).toEqual(22);
        });

        it("if a strike AND the follwoing 2 bowls are also a strikes, 2 bowl scores will be added to the total score of the frame where the strike occured", function() {
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(10);
            expect(bowlingscore.showFrameScore(1)).toEqual(30);
        });

        it("if a strike, the following bowl is also a strike, but the next bowl is NOT a strike, 2 bowl scores will be added to the total score of the frame where the strike occured", function() {
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(10);
            bowlingscore.enterBowlingScore(5);
            bowlingscore.enterBowlingScore(3);
            expect(bowlingscore.showFrameScore(1)).toEqual(25);
        });
    });

    describe("#spare", function() {
        it("if a spare, the following bowl score will be added to the total score of the frame where the spare occured", function() {
            bowlingscore.enterBowlingScore(5);
            bowlingscore.enterBowlingScore(5);
            bowlingscore.enterBowlingScore(5);
            bowlingscore.enterBowlingScore(3);
            expect(bowlingscore.showFrameScore(1)).toEqual(15);
        });
    });

    describe("#tenthFrame", function() {
        it("it allows for 2 extra bowls if a strike is bowled on the 10th frame", function() {
          for (var i = 0; i < 18; i++) {
              bowlingscore.enterBowlingScore(2);
          }
          bowlingscore.enterBowlingScore(10);
          expect(function() { bowlingscore.enterBowlingScore(10); }).not.toThrow("End of Game!");
          bowlingscore.enterBowlingScore(10);
          expect(function() { bowlingscore.enterBowlingScore(10); }).toThrow("End of Game!");
        });

        it("it allows for 1 extra bowl if a spare is bowled on the 10th frame", function() {
          for (var i = 0; i < 18; i++) {
              bowlingscore.enterBowlingScore(2);
          }
          bowlingscore.enterBowlingScore(5);
          bowlingscore.enterBowlingScore(5);
          expect(function() { bowlingscore.enterBowlingScore(5); }).not.toThrow("End of Game!");
          expect(function() { bowlingscore.enterBowlingScore(5); }).toThrow("End of Game!");
        });
    });
});
