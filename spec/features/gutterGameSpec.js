describe('perfect game', function() {

  var game = new Game('Rufus');

  it('correctly calculates gutter game', function() {
    for(i=0; i<10; i++) {
      game.currentFrame.bowl(0);
      game.currentFrame.bowl(0);
      game.nextFrame();
    }
    expect(game.score).toEqual(0);
  });
});
