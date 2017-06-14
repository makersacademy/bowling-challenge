describe("bowl", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("increments the current frame number after finishing a frame", function() {
    game.bowl(); game.bowl();
    expect(game.currentFrame).toEqual(2);
  });
});
