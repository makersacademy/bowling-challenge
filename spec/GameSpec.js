describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has default score of 0', function(){
    expect(game.score()).toEqual(0);
  });

});
