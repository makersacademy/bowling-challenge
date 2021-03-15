describe('Game', function() {

  it('should start with 10 frames', function() {
    let game = new Game();
    expect(game.scorecard.length).toEqual(10);
  });

})
