describe("BowlingGame", function () {
  var bowlingGame,
      scoreMock;

  beforeEach(function () {
    bowlingGame = new BowlingGame();
    scoreMock = jasmine.createSpyObj('score', ['record', 'total', 'newFrame'])
  });

  describe("Initialisation", function () {
    it("has a blank score", function () {
      expect(bowlingGame.score).toEqual(0);
    });
  });

  describe("Methods", function () {
    beforeEach(function () {
      bowlingGame.begin(scoreMock);
    });
    
    describe("#begin", function () {
      it("starts a new game", function () {
        expect(bowlingGame.score).not.toBe(0)
      });
    });

    describe("#roll", function () {
      it("returns the number of pins knocked down", function () {
        expect(bowlingGame.roll(10)).toEqual(10);
      });
    });

    describe("#getScore", function () {
      beforeEach(function () {
        bowlingGame.roll(5);
        bowlingGame.roll(2);

        bowlingGame.roll(8);
        bowlingGame.roll(2);
      });

      it("returns the player's current score", function () {
        scoreMock.total.and.returnValue(17);
        expect(bowlingGame.getScore()).toEqual(17);
      });
    });
  });
});
