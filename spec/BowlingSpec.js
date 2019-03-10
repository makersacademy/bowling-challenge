describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  })

      it ('starts as an empty scorecard', function() {
      expect(scorecard.scores).toEqual([])
      })

      it ('the array of frames scores is empty', function() {
      expect(scorecard.frames).toEqual( [[], [], [], [], [], [], [], [], [], []] );
      })


    it ("stores the score in score", function () {
      scorecard.roll(1)
      expect(scorecard.scores[0]).toEqual(1)
    })


}) // last brackets





  //
  // describe("After each round:", function() {
  //       it ('stores the value of the roll', function () {
  //         scorecard.roll(1)
  //         expect(scorecard.score).toEqual(1)
  //       })
  //
  //   })

// })
