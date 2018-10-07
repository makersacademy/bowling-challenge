describe ("Game", function(){
  var frame
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe ('rollBall', function(){
    it("calls calculate on currentFrame attribute", function(){

      used_frame = new Frame();
      //used_frame.decreaseRoll();
      //used_frame.decreaseRoll();
      //need attribute reader?
      // is the return a problem here?

      expect(game.rollBall(5)).toEqual(game.currentFrame.calculate(5));
    })
  })

});
