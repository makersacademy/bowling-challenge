describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('initializes with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('initializes with an array of frames', function(){
    expect(game.frames).toEqual(jasmine.any(Array));
  });

});
