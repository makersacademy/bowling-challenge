describe ("Game", function(){
  var frame
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe ('rollBall', function(){

    it("calls calculate on currentFrame attribute", function(){
      expect(game.rollBall(5)).toEqual(game.currentFrame.calculate(5));
    })

    it("creates a new Frame and saves it to currentFrame, if currentFrame has no rolls left, ensuring that the rolls are reset", function(){
      game.rollBall(2);
      game.rollBall(5);
      game.rollBall(3)
      expect(game.currentFrame._rollsLeft).toEqual(1) //not a great test as it's testing actual Frame class, but best I could do to check it's new
    })
    it("still calls calculate on fresh currentFrame", function(){
      game.rollBall(2);
      game.rollBall(5);
      expect(game.rollBall(3)).toEqual(game.currentFrame.calculate(3))
    }) //vacuous test?
  })
});
