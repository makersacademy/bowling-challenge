describe('Game', function(){
  var frame;
  frame = new Frame();
  var game;
  game = new Game();

  it('store the scores of each frame as they are played', function(){
    spyOn(frame, 'frameTotal').and.returnValue(99)
    expect(game.frameScores).toEqual([99])
  })




})
