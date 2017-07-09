describe("Game", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('initializes with an empty array for the frames', function(){
    expect(game.frames).toEqual([]);
  });

  it('initializes with a total score of 0', function() {
    expect(game.score).toEqual(0);
  });
});
