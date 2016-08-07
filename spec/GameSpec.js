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

  it('totalGrameScore returns total score of a game', function(){
    game.bowl();
    game.bowl();
    expect(game.totalGameScore()).toBeLessThan(11);
  });

  it('enables frames to be played a maximum of 10 times', function(){

  });

});
