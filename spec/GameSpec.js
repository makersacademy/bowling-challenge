describe ("Game", function(){
  var frame
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe ('rollBall', function(){
    it("creates a new frame class if current Frame has no rolls left", function(){
      // used_frame = new Frame();
      // used_frame.descreaseRoll();
      // used_frame.descreaseRoll();
      //need attribute reader?
      // is the return a problem here?
      expect(game.rollBall()).toEqual(new Frame());
    })
  })

});
