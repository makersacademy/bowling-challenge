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
    Roll()
    expect(game._frames.length).toEqual(1)
  });

  it('calculates total points', function(){
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    Roll()
    Roll()
    expect(game.total()).toEqual(8)
  });

  it('adds bonus points for a spare', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(5)
    Roll()
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    Roll()
    Roll()
    expect(game.total()).toEqual(22)
  });

  it('adds bonus points for a strike', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    Roll()
    Roll()
    expect(game.total()).toEqual(26)
  });

  it('adds correct bonus points if two strikes in a row', function() {
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(7)
    Roll()
    Roll()
    expect(game.total()).toEqual(65)
  });

  it('reports the game is over after ten rolls', function() {
    for(var x = 0; x < 10; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(4)
      Roll()
      Roll()
    }
    expect(game.isFinished()).toEqual(true)
  });

  it('gives player an extra roll if roll ten is a spare', function() {
    for(var x = 0; x < 10; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(5)
      Roll()
      Roll()
    }
    expect(game.isFinished()).toEqual(false)
  });

  it('adds the bonus roll to the score', function() {
    for(var x = 0; x < 9; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(1)
      Roll()
      Roll()
    }
    spyOn(game._currentFrame, '_hit').and.returnValue(5)
    Roll()
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(7)
    Roll()
    expect(game.total()).toEqual(35)
  });

  it('reports the game is finished after one bonus roll for a spare', function() {
    for(var x = 0; x < 10; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(5)
      Roll()
      Roll()
    }
    spyOn(game._currentFrame, '_hit').and.returnValue(7)
    Roll()
    expect(game.isFinished()).toEqual(true)
  });

  it('gives player two extra rolls if roll ten is a strike', function() {
    for(var x = 0; x < 10; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(10)
      Roll()
    }
    spyOn(game._currentFrame, '_hit').and.returnValue(4)
    Roll()
    expect(game.isFinished()).toEqual(false)
    Roll()
    expect(game.isFinished()).toEqual(true)
  });

  it('adds the points from two bonus rolls to the score', function() {
    for(var x = 0; x < 9; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(1)
      Roll()
      Roll()
    }
    spyOn(game._currentFrame, '_hit').and.returnValue(10)
    Roll()
    spyOn(game._currentFrame, '_hit').and.returnValue(7)
    Roll()
    Roll()
    expect(game.total()).toEqual(42)
  });

  it('correctly adds up the total score after twelve strikes', function() {
    for(var x = 0; x < 11; x++) {
      spyOn(game._currentFrame, '_hit').and.returnValue(10)
      Roll()
    }
    Roll()
    expect(game.total()).toEqual(300)
  });

  Roll = function() {
    game.roll()
    if(game._currentFrame.isFinished()) {
      game.updateAndStore()
    }
  }

});
