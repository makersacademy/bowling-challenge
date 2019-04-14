describe('can only play 10 frames', function() {
  it('should not create new frames after 10', function() {
    game = new Game
    for (i = 1; i <= 30; i++){
      game.roll(3);
    };
    expect(game.frames.length).toEqual(10);
  })
  it('after 10th frame is complete, more rolls will not register', function() {
    game = new Game
    for (i = 1; i <= 20; i++){
      game.roll(1);
    };
    game.roll(5);
    expect(game.totalScore()).toEqual(20);
  })
});
