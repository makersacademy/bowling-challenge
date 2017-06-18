describe('Feature', function() {


  var game = new Game
  beforeEach(function () {
    game.fullFrame(new Frame)
    spyOn(game.frames[0].rolls[0], 'randomNumberGenerator').and.returnValue(5)
    game.roll(0,0)
    game.frames[0].calculateFrameScore(game.frames[0].rolls)
  });

  it('play first game', function() {
    game.updateGameScores(0)
    expect(game.scores).toEqual([[5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]])
  })

  it('play first game', function() {
    game.updateFrameTotals(0)
    expect(game.frametotals).toEqual([5,0,0,0,0,0,0,0,0,0])
  })

  it('gives an extra roll if the player plays a spare on the last go', function() {
    spyOn(game.frames[9], 'spare').and.returnValue(true)
    game.tenthFrameTest();
    expect(game.frames[9].rolls.length).toEqual(3)

  })

})
