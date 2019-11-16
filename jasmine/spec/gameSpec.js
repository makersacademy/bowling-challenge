describe("Game", function() {
  var game;
  var frame;
  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpy('frame')
  });

  it("exists", function() {
    expect(game).toBeDefined();
  });

  it("can add a frame", function() {
    expect(game.addFrame(frame)).toEqual([frame])
  });
});
