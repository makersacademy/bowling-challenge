describe ("Game", function(){
  var frame
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe ('rollBall', function(){

    it("calls calculate on currentFrame attribute if there are still rolls left on that frame", function(){
      expect(game.rollBall(5)).toEqual(game._currentFrame.calculate(5));
    })

    it("calls to newFrame function if currentFrame has no rolls left, ensuring that the rolls are reset", function(){
      game.rollBall(2);
      game.rollBall(5);
      game.rollBall(3);
      expect(game._currentFrame._rollsLeft).toEqual(1) //not a great test as it's testing actual Frame class, but best I could do to check it's new
    })
    it("still calls calculate on fresh currentFrame if no rolls left on previous frame", function(){
      game.rollBall(2);
      game.rollBall(5);
      expect(game.rollBall(3)).toEqual(game._currentFrame.calculate(3))
    }) //vacuous test?

    it("calls to descreaseFrames function to decreases the frames left", function(){
      //is this the right way to test this? As it's a private method, I guessed that it is.
      //Otherwise, I would have created a new test for increaseFrames and tested it directly
      game.rollBall(2);
      game.rollBall(3);
      game.rollBall(2);
      expect(game._frameNumber).toEqual(2)
    })
    it("calls to total function to add frameScore to total after a frame is done", function(){
      game.rollBall(2);
      game.rollBall(3);
      game.rollBall(5);
      expect(game.totalScore).toEqual(5) //same as before, I didn't test private total method directly
    })
  })

});
