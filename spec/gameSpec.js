describe("Game", function() {
  var frame;

  beforeEach(function() {
    game = new Game();
  });

describe("The game should start with", function(){
  it("a maximum of 10 frames", function(){
    expect(game.MAXFRAMES).toEqual(10);
  });

  it("a frame counter", function(){
    expect(game.frameCounter).toEqual(0);
  });
});

});
