describe('Game features', function() {

  var game;
  beforeEach(function () {
    game = new Game();
  });

  it('Adds a new frame to the frames array ', function (){
    game.addFrame(new Frame);
    expect(game.frames.length).toEqual(1);
  })

  it('Creates a full frames array', function (){
    game.fullFrame(new Frame);
    expect(game.frames.length).toEqual(10);
  })

  it('Updates the scores of the game', function (){
    game.fullFrame(new Frame);
    game.updateGameScores(0);
    expect(game.scores).toEqual([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]])
  })

  it('Updates the scores of the game after first roll ', function (){
    spyOn(game, 'getFrameScore').and.returnValue([10,0])
    game.updateGameScores(0)
    expect(game.scores[0]).toEqual([ 10, 0 ])
  })

  it('Updates the frame score', function() {
    spyOn(game, 'getFrameScore').and.returnValue([10,0])
    game.updateFrameTotals(0)
    expect(game.frametotals[0]).toEqual(10)
  } )

  it('Updates the frame score if the previous score was a strike', function() {
    game.fullFrame(new Frame);
    spyOn(game, 'getFrameScore').and.returnValue([10,0])
    spyOn(game.frames[0], 'strike').and.returnValue(true)
    game.updateFrameTotals(0)
    game.updateFrameTotals(1)
    expect(game.frametotals[0]).toEqual(20)
    expect(game.frametotals[1]).toEqual(10)
  })
  it('Updates the frame score if the previous score was a spare', function() {
    game.fullFrame(new Frame);
    spyOn(game, 'getFrameScore').and.returnValue([5,5])
    spyOn(game.frames[0], 'spare').and.returnValue(true)
    game.updateFrameTotals(0)
    game.updateFrameTotals(1)
    expect(game.frametotals[0]).toEqual(15)
    expect(game.frametotals[1]).toEqual(10)
  })
  it(' Does not update the frame score if the previous score was not a strike or spare', function() {
  game.fullFrame(new Frame);
  spyOn(game, 'getFrameScore').and.returnValue([4,5])
  spyOn(game.frames[0], 'spare').and.returnValue(false)
  game.updateFrameTotals(0)
  game.updateFrameTotals(1)
  expect(game.frametotals[0]).toEqual(9)
  expect(game.frametotals[1]).toEqual(9)
  })
})
