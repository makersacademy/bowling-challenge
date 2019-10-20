describe('Feature Tests:', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it("allows a person to record a gutter game", function() {
    for (i=0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getCurrentScore()).toEqual(0);
  });

  it("allows a person to record a normal score, no bonuses", function() {
    for (i=0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getCurrentScore()).toEqual(20);
  });

});
