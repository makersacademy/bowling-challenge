describe('Game', function(){
  beforeEach(function(){
    game = new Game();
  });

  it('Score starts at 0', function(){
    expect(game._score).toEqual(0);
  });

  it('Starts with the first frame (1)', function () {
    expect(game._frame).toEqual(1);
  });

  it('Game is not finished when started', function() {
    expect(game._gameOver).toEqual(false);
  });

});
