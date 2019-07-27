describe('Start Game', function(){
  beforeEach(function(){
    game = new Game();
  });

  it('Score starts at 0', function(){
    expect(game._totalScore).toEqual(0);
  });

  it('Starts with the first frame (1)', function () {
    expect(game._frame).toEqual(1);
  });

  it('Game is not finished when started', function() {
    expect(game._gameOver).toEqual(false);
  });
});

describe('Play Game', function(){
  beforeEach(function(){
    game = new Game();
  });

  it('Adds the score of a completed frame', function () {
    spyOn(frame, "score").and.returnValue(5);
    game.updateScore(frame)
    expect(game._totalScore).toEqual(5);
  });

});
