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
    singleRoll()
    expect(game._frames.length).toEqual(1)
  });

  it('calculates total points', function(){
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    doubleRoll()
    expect(game.total()).toEqual(8)
  });

  it('adds bonus points for a spare', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(5)
    doubleRoll()
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    doubleRoll()
    expect(game.total()).toEqual(22)
  });

  it('adds bonus points for a strike', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    singleRoll()
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    doubleRoll()
    expect(game.total()).toEqual(26)
  });

  it('adds correct bonus points if two strikes in a row', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    singleRoll()
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    singleRoll()
    spyOn(game._currentFrame, '_hit').and.returnValue(7)
    doubleRoll()
    expect(game.total()).toEqual(65)
  });


  doubleRoll = function() {
    game.roll()
    game.roll()
  }

  singleRoll = function() {
    game.roll()
  }

});
