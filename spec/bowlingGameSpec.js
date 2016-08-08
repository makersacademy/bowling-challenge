describe("bowlingGame", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("adds a zero score to the roll", function(){
    game.roll(0);
    expect(game.currentFrame).toEqual([0]);
  });
  it("adds a scores to the roll", function(){
    game.roll(7);
    expect(game.currentFrame).toEqual([7]);
  });
  it("only allows one turn if a strike is rolled", function(){
    game.roll(10);
    expect(game.frames).toEqual([[10]]);
  });
  it("only allows for two rolls in each frame", function(){
    game.roll(6);
    game.roll(2);
    expect(game.frames).toEqual([[6, 2]]);
  });
  it("The current frame is emptied when written to frames with 2 scores", function(){
    game.roll(6);
    game.roll(2);
    expect(game.currentFrame).toEqual([]);
  });
  it("The current frame is emptied when written to frames with a strike", function(){
    game.roll(10);
    expect(game.currentFrame).toEqual([]);
  });
  it("can calculate the score of a gutter game", function(){
    for(var i = 0; i < 20; i++){
      game.roll(0)};
      expect(game.total).toEqual(0)
  });
  it("can calculate the score of a game with no strikes or spares", function(){
    for(var i = 0; i < 20; i++){
      game.roll(2)};
    expect(game.total).toEqual(40)
  });
  it("can calculate the score of a game with one strike", function(){
    game.roll(10)
    for(var i = 0; i < 18; i++){
      game.roll(2)};
    expect(game.total).toEqual(56)
  });
  it("can calculate the score of a game with two strikes", function(){
    game.roll(10)
    game.roll(10)
    for(var i = 0; i < 16; i++){
      game.roll(2)};
    expect(game.total).toEqual(62)
  });
  it("can calculate the score of a game with one spare", function(){
    game.roll(9)
    game.roll(1)
    for(var i = 0; i < 18; i++){
      game.roll(2)};
    expect(game.total).toEqual(62)
  })
});
