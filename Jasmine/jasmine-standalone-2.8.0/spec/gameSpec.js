describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("initialize the game with a score of 0 ", function(){
    expect(game.score).toEqual(0)
  });
  
  describe("Roll the ball", function(){

    it("plays and add points to score", function(){
      game.roll()
      game.addPoints()
      expect(game.score).toEqual(1)
    });
  });

});
