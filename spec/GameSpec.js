describe("Game", function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
  });

  it('sets frame scores to an empty array', function(){
    expect(game.frameScores).toEqual([]);
  });

  it('keeps count of frames played', function(){
    game.bowl();
    game.bowl();
    expect(game.frameNumber).toEqual(1);
  });

  it('totalGameScore sets gameScore to total score of game', function(){
    game.bowl();
    game.bowl();
    expect(game.gameScore.toBeLessThan(11);
  });


});
