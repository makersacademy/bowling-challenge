describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  it("can roll a gutter game", function(){
    for (i = 0; i < 10; i++) {
      game.bowl([0,0]);
    }
    expect(game.score()).toEqual(0);
  })

})
