describe('Frame', function (){
  var frame;
  var game;
  beforeEach(function (){
    frame = new Frame();
    game = jasmine.createSpyObj('game',['_calculateScore','hit']);
    game._calculateScore(9);
  });

  it('registers the score from one hit', function () {
    frame.displayScore(game._calculateScore());
    expect(game._calculateScore).toHaveBeenCalledWith(9);
  });
});
