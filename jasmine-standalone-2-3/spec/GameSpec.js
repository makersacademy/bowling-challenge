describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  function setUpFrames(frame) {
    for( i = 0; i < 10; i++) {
      game.bowl(frame);
    }
  }

  it("can roll a gutter game", function(){
    setUpFrames([0,0]);
    expect(game.score()).toEqual(0);
  })

  it("can roll a game of all 1s", function(){
    setUpFrames([1,1]);
    expect(game.score()).toEqual(20);
  })

})
