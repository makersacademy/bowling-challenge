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

  it('puts the scores from the frame into frameScores', function(){
    game.bowl();
    game.bowl();
    var frameScores = game.frameScores[0];
    expect(frameScores[0]).toBeLessThan(10);
    expect(frameScores[1]).toBeLessThan(9);
  });

  it('enables frames to be played a maximum of 10 times', function(){

  });


});
