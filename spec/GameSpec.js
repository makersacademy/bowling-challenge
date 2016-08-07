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
    game.newFrame();
    expect(game.frameNumber).toEqual(2);
  });

  it('puts the score from last frame into frameScores', function(){
    game.bowl();
    game.bowl();
    expect(game.frameScores[0]).toBeLessThan(11);
  });

  it('totalGrameScore returns total score of a game', function(){
    game.bowl();
    game.bowl();
    expect(game.totalGameScore()).toBeLessThan(11);
  });

  it('enables frames to be played a maximum of 10 times', function(){

  });

  // it('returns total score of a frame', function(){
  //   game.bowl();
  //   game.bowl();
  //   expect(game.frameScore()).toBeLessThan(11);
  // });


});
