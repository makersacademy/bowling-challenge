describe ("Game", function() {
  var game
  beforeEach(function(){
    game = new Game();
  })

  describe ('totalScore', function(){
    it("has a starting score of 0", function(){
      expect(game.totalScore()).toEqual(0);
    })
  })

});
