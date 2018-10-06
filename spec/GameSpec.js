describe ("Game", function() {
  var game
  var frame
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  })

  describe ('rollBall', function(){
    it("creates a new frame class", function(){
      expect(game.rollBall()).toEqual(frame);
    })
  })



});
