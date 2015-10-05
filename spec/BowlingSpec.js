describe("Bowling", function() {
  var game;
  var frame;


  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('should be able to play a frame', function() {
    game.play(frame);
    expect(game.currentframe).toEqual(1);
    expect(player).toBePlaying(song);
  });

});
