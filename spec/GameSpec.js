describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to record roll results", function() {
    game.recordRoll(6);
    expect(game.rolls).toEqual([6]);
  });

  it("should record a frame after two rolls", function() {
    for(var i=0; i < 3; i++){
      game.recordRoll(6);
    }
    expect(game.frames).toEqual([[6,6]])
  });

});
