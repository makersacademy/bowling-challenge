describe('perfect game', function() {

  var game = new Game('Rufus');

  it('correctly calculates perfect game', function() {
    for(i=0; i<9; i++){
      game.currentFrame.bowl(10);
      game.nextFrame();
    }

    for(i=0; i<3; i++){game.currentFrame.bowl(10);}
    game.nextFrame();

    expect(game.score).toEqual(300);
  });
});
