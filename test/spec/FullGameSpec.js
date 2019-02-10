describe("Full Game", function(){
  var FullGame;
})

  beforeEach(function() {
    fullgame = new FullGame;
  });

    it('0 score to start', function() {
      expect(FullGame.currentScore()).toEqual(0)
    });
