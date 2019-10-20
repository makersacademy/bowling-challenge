describe('Feature Tests:', function(){
  var game;

  beforeEach(function(){
    game = new Game();
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

  it("allows a person to get bonus points for a split", function() {
    for (i=0; i < 3; i++) {
      game.roll(5);
    }
    expect(game.getCurrentScore()).toEqual(20);
  });

});
