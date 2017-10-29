describe("The Big Lebowski", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  var checkTotal = function(description, rollValues, expectedResult) {
    describe(description, function() {
      it("calculates correct total", function() {
        rollValues.forEach(function(rollValue) {
          game.addRoll(rollValue);
        })
        expect(game.totalScore()).toEqual(expectedResult)
      })
    })
  }

  checkTotal(
    description = "no strikes or spares",
    rollValues = [2,3,4,3,6,1,2,3,4,1,2,3,4,3,2,4,1,2,3,2],
    expectedResult = 55
  )

  checkTotal(
    description = "no strikes, but some spares (not in frame 10)",
    rollValues = [2,3, 4,6, 6,1, 2,8, 4,1, 2,3, 4,3, 2,4, 1,9, 3,2],
    expectedResult = 83
  )

  checkTotal(
    description = "some strikes and spares (but not in frame 10 and not consecutive strikes)",
    rollValues = [2,3, 10, 6,1, 2,8, 10, 2,3, 4,3, 2,4, 1,9, 3,2],
    expectedResult = 100
  )

  checkTotal(
    description = "some consecutive strikes and some spares (but not in frame 10)",
    rollValues = [10, 7,3, 9,0, 10, 0,8, 8,2, 0,6, 10, 10, 8,1],
    expectedResult = 146
  )

  checkTotal(
    description = "general example scoresheet",
    rollValues = [9,0, 3,5, 6,1, 3,6, 8,1, 5,3, 2,5, 8,0, 7,1,  8,1],
    expectedResult = 82
  )

  checkTotal(
    description = "general example scoresheet",
    rollValues = [10, 3,7, 6,1, 10, 10, 10, 2,8, 9,0, 7,3, 10,10,10],
    expectedResult = 193
  )

  checkTotal(
    description = "general example scoresheet",
    rollValues = [9,0, 3,7,  6,1, 3,7,  8,1, 5,5,  0,10,  8,0, 7,3, 8,2,8],
    expectedResult = 131
  )

  checkTotal(
    description = "general example scoresheet",
    rollValues = [10, 7,3,	7,2, 9,1,	10, 10, 10,	2,3, 6,4, 7,3,3],
    expectedResult = 168
  )

});
