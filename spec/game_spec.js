describe("Bowling Game", function() {
  var game,
      currentframe;
  var rand = 4;

  var total = 0;

  beforeEach(function() {
    game = new Game();
    spyOn(Math, "floor").and.callFake(function() {
      return rand;
    });
  });

  it("set's up new game with 0 score", function() {
    expect(game.calculateTotalScore()).toEqual(0);
  });

  it("calculates total score of all completed frames", function() {
    for(var i = 0; i < 10; i++) {
      game.run();
    }
    expect(game.calculateTotalScore()).toEqual(72);
  });

});
