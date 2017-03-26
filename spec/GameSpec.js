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

  it("can calculate the score of a game with a spare", function(){
    setUpFrames([5,5],1);
    setUpFrames([6,1],1);
    expect(game.score()).toEqual(23);
  })

  it("can calculate the score of a game with a strike", function(){
    setUpFrames([10,0],1);
    setUpFrames([6,3],1);
    expect(game.score()).toEqual(28);
  })

  it("calculates the score of three strikes in a row", function(){
    setUpFrames([10,0],3);
    setUpFrames([1,1],1);
    expect(game.score()).toEqual(65);
  })

  it("calculates the score of a game ending with spare", function(){
    setUpFrames([10,0],9);
    setUpFrames([6,4,5],1);
    expect(game.score()).toEqual(271);
  })

  it("calculates the score of a perfect game", function(){
    setUpFrames([10,0],9);
    setUpFrames([10,10,10],1);
    expect(game.score()).toEqual(300);
  })

  it("throws an error when adding 11th frame", function(){
    setUpFrames([0,0],10);
    msg = "Game finished. Please start new game.";
    expect(function() {game.bowl([0,0])}).toThrowError(msg);
    })


});
