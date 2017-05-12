describe("A game", function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("calculates a gutter game", function() {
    generateFrames([0,0]);
    expect(game.score()).toEqual(0);
  });

  it("calculates a standard game", function() {
    generateFrames([5,1]);
    expect(game.score()).toEqual(60);
  });

  it("calculates a game with all spares", function() {
    generateFrames([5,5], [5,5,5]);
    expect(game.score()).toEqual(150);
  });

  it("calculates a perfect game with all strikes", function() {
    generateFrames([10], [10,10,10]);
    expect(game.score()).toEqual(300);
  });

  function generateFrames(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    }

    game.roll(final_frame || frame);
  }
});
