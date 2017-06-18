describe('Game', function(){

  var game

  beforeEach(function(){
    game = new Game()
  })

  it('rolls and registers frame', function(){
    game.roll([4,4])
    expect(game._frames[0].rolls).toEqual([4,4])
  })

  it('calculates the total game score', function(){
    game.roll([4,4])
    game.roll([4,1])
    game.roll([10,0])
    game.roll([9,0])
    game.roll([5,3])
    game.roll([4,4])
    game.roll([4,1])
    game.roll([10,0])
    game.roll([9,0])
    game.roll([5,3])
    expect(game.totalScore()).toEqual(80);
  })

  it('keeps track of the number of frames player', function(){
    game.roll([4,4])
    game.roll([4,1])
    game.roll([10,0])
    expect(game.framesPlayed()).toEqual(3);
  })

  it('keeps track of the number of frames left to play', function(){
    game.roll([4,3])
    expect(game.framesLeft()).toEqual(9);
  })

  it('is active if there are still frames to be played', function(){
    game.roll([4,3])
    expect(game.isActive()).toEqual(true);
  })

  it('is not active if all the frames were played', function(){
    game.roll([4,4])
    game.roll([4,1])
    game.roll([10,0])
    game.roll([9,0])
    game.roll([5,3])
    game.roll([4,4])
    game.roll([4,1])
    game.roll([10,0])
    game.roll([9,0])
    game.roll([5,3])
    expect(game.isActive()).toEqual(false);
  })
})
