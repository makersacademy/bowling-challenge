describe("Bowling Game", function() {
    let bowlingGame;

    beforeEach(function () {
        bowlingGame = new BowlingGame();
    });

    describe('Fresh scoring card...', function () {
        it("...is empty", function () {
            expect(bowlingGame.scoreCard).toEqual([]);
        });
    });

    describe('#frame', function () {
        it("bowling 3, 4 in the first frame will add [3, 4] to first entry of scoreCard", function () {
            bowlingGame.frame(3,4);
            expect(bowlingGame.scoreCard[0]).toEqual([3,4]);
        });

        it("When on the 10th frame, if no strikes or spare bowled then able to bowl 3 times", function () {
            for (let i = 0; i <= 8; i++) {
                bowlingGame.frame(3,4);
            }
            bowlingGame.frame(3,4,5);
            expect(bowlingGame.scoreCard[9]).toEqual([3,4,5]);
        });


    });

});