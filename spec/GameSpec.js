// When player bowls a strike
  // when next ball is a strike
  // when next frame is a spare
  // when next frame is under 10
// When player bowls a spare
  // when next ball is a strike
  // when next ball is under 10
// When player bowls a frame under 10

describe('Game', function(){
  it('starts with a total score of 0', function(){
    var game = new Game();
    expect(game.totalScore).toEqual(0);
  });

  it('total score is updated after a frame', function(){
    var game = new Game();
    game.updateTotalScore(8);
    game.updateTotalScore(3);
    expect(game.totalScore).toEqual(11);
  });

  it('updates the current frame every game', function(){
    var game = new Game();
    game.updateTotalScore(6);
    game.updateTotalScore(6);
    expect(game.currentFrame).toEqual(3);
  });

});
