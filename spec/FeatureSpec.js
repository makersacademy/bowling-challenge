describe("A game of bowling", function(){
  var roll
  var frame
  var scorecard
  var game

  beforeEach(function(){
    roll = new Roll();
    frame = new Frame(roll);
    scorecard = new Scorecard();
    game = new Game(frame, scorecard)
  });

  describe("scorecard", function(){
    it('stores the scores on a scorecard', function(){
      spyOn(roll, "result").and.returnValue(3);
      game.bowl()
      game.bowl()
      expect(scorecard.scores()).toEqual([3,3])
    });
  });

});
