describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  })

  describe("At the start of the game:", function() {

        it ('starts as an empty scorecard', function() {
          expect(scorecard.score).toEqual([])
        })

        it ('the array of frames scores is empty', function() {
          expect(scorecard.frames).toEqual( [[], [], [], [], [], [], [], [], [], []] );
        })
  })

})
  //
  // describe("After each round:", function() {
  //       it ('stores the value of the roll', function () {
  //         scorecard.roll(1)
  //         expect(scorecard.score).toEqual(1)
  //       })
  //
  //   })

// })
