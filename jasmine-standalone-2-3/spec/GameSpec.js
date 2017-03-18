describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  })

  function setUpFrames(frame, n) {
    for( i = 0; i < n; i++) {
      game.bowl(frame);
    }
  }

  it("can roll a gutter game", function(){
    setUpFrames([0,0],10);
    expect(game.score()).toEqual(0);
  })

  it("can roll a game of all 1s", function(){
    setUpFrames([1,1],10);
    expect(game.score()).toEqual(20);
  })

  it("can calculate score of a game with a spare", function(){
    setUpFrames([5,5],1);
    setUpFrames([6,1],1);
    expect(game.score()).toEqual(23);
  })
});
