describe('Game', function() {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('is initiated without any frames', function() {
    expect(game._frames).toEqual([]);
  });

  it('stores finished frames', function(){
    spyOn(game._currentFrame, 'isFinished').and.returnValue(true)
    game.roll()
    expect(game._frames.length).toEqual(1)
  });

  it('calculates total points', function(){
    spyOn(game._currentFrame, 'points').and.returnValue(4)
    spyOn(game._currentFrame, 'isFinished').and.returnValue(true)
    game.roll()
    expect(game.total()).toEqual(4)
  })

  it('calculates bonus strike score', function() {
    spyOn(game._currentFrame, 'points').and.returnValue(10)
    spyOn(game._currentFrame, 'isFinished').and.returnValue(true)
    game.roll()
    spyOn(game._currentFrame, 'points').and.returnValue(10)
    spyOn(game._currentFrame, 'isFinished').and.returnValue(true)
    game.roll()
    expect(game.total()).toEqual(30)
  });

});
