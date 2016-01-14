describe("features", function() {
  var frame, game;

  beforeEach(function() {
    frameKlass = Frame;
    game = new Game(frameKlass,length);
  });

  it("records additional bowls in individual frames", function() {
    for(var i=0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.frames[6].getScoreCard()).toEqual([0,0]);
  });
});
