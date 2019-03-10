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


    it ("stores the score in scores", function () {
      scorecard.roll(1)
      expect(scorecard.scores[0]).toEqual(1)
    })

    it ("stores the next score in scores", function () {
      scorecard.roll(1)
      scorecard.roll(8)
      scorecard.roll(5)
      expect(scorecard.scores[0]).toEqual(1)
      expect(scorecard.scores[1]).toEqual(8)
      expect(scorecard.scores[2]).toEqual(5)
    })

    it ("checks if the scores length is even", function () {
      expect(scorecard.isEven(2)).toEqual(true)
      expect(scorecard.isEven(1)).toEqual(false)
    })

    // it("calculates the score of the first frame", function () {
    //   scorecard.roll(1)
    //   scorecard.roll(8)
    //   scorecard.roll(5)
    //   expect(scorecard.frame).toEqual(9)
    //
    // })


}) // last brackets
