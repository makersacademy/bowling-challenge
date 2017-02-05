describe("A game of bowling", function(){
  var roll
  var frame
  var scorecard

  beforeEach(function(){
    roll = new Roll();
    frame = new Frame(roll);
    scorecard = new Scorecard(frame);
  });

  describe("scorecard", function(){
    it('stores the scores on a scorecard', function(){
      spyOn(roll, "result").and.returnValue(3);
      scorecard.bowl()
      scorecard.bowl()
      expect(scorecard.scores).toEqual([3,3])
    });
  });

});
