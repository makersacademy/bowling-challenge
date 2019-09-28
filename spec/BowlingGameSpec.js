describe("Bowling Game", function() {
    let bowlingGame;

    beforeEach(function () {
        bowlingGame = new BowlingGame();
    });

    describe('Fresh scoring card', function () {
        it("scoreCard is empty", function () {
            expect(bowlingGame.scoreCard).toEqual([]);
        });
    });

    describe('#bowl', function () {
        it("scoreCard is empty", function () {
            bowlingGame.bowl(5)
            expect(bowlingGame.scoreCard).toEqual([5]);
        });
    });

});