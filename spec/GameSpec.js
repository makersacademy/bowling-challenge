describe("Game", function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it("creates a new frame", function(){
    game.play();
    expect(game.frames[0]).toEqual(frame);

  })
})
