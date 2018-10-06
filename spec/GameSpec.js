describe ("Game", function() {
  var game
  beforeEach(function(){
    game = new Game();
  })

  describe ('totalScore', function(){
    it("has a starting score of 0", function(){
      expect(game._totalScore).toEqual(0);
    })
  })

  describe ('framesLeft', function(){
    it("has a starting number of 10", function(){
      expect(game._framesLeft).toEqual(10)
    })
  })


});
