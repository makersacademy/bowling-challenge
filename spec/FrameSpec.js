describe('frame', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts at frame 1 on a new game', function () {
    expect(game.frame).toEqual(1);
  });

  it('has 10 pins at the beginning of each frame', function() {
      game.newFrame();
      expect(game.pins).toEqual(10);
  });

  it('automatically increments the frame number', function () {
      game.newFrame();
      expect(game.frame).toEqual(2);
  });
});
