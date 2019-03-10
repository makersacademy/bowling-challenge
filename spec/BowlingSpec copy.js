describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  })

  describe("At the start of the game:", function() {

        it ('has a score of zero', function() {
          expect(scorecard.totalScore).toEqual(0)
        })

        it ('starts as an empty scorecard', function() {
          expect(scorecard.allFrames).toEqual( [[], [], [], [], [], [], [], [], [], []] );
        })

  })

  describe("After each round:", function() {

        it ('stores the value of the first roll', function () {
          scorecard.firstRoll(1)
          expect(scorecard.roll1).toEqual(1)
        })

        it ('stores the value of the second roll', function() {
          scorecard.secondRoll(9)
          expect(scorecard.roll2).toEqual(9)
        })

        it ("stores the values of the two rolls in one frame", function () {
          scorecard.firstRoll(1)
          scorecard.secondRoll(9)
          scorecard.eachFrame()
          expect(scorecard.frame).toEqual([1,9])
        })

        it ("if the first roll is 10, we have 'stirke' and the next roll is 0", function () {
          scorecard.firstRoll(10)
          scorecard.roll2 = 0
          scorecard.eachFrame()
          expect(scorecard.frame).toEqual([10, 0])
       })

       it ("for each frame the score for the round is the sum of the two rolls", function() {
         scorecard.firstRoll(1)
         scorecard.secondRoll(9)
         scorecard.eachFrame()
         expect(scorecard.frame).toEqual([10, 0])


       })

       // it ("once there have been two rolls, the program stores the frame", function () {
       //   scorecard.firstRoll(1)
       //   scorecard.secondRoll(9)
       //   scorecard.eachFrame()
       //   expect(scorecard.allFrames[0]).toEqual([[1,9]])
       // })
    })

})
