describe('Frame', function() {
  var frame;
  var aGame;

  beforeEach(function() {
    aGame = new Game(); // replace this with a spy!
    frame = new Frame(aGame)
  })

  it('starts with an empty rolls array,', function() {
    expect(frame.rolls).toEqual([])
  })

  it('where it can store multiple roll pins,', function() {
    frame.addRoll(5)
    frame.addRoll(2)
    expect(frame.rolls).toEqual([5, 2])
  })

  it('but no more than FRAME_LENGTH (2) rolls.', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.rolls).toEqual([2, 3])
    expect(function() {frame.addRoll(4)}).toThrowError('Impossibru - frame overflow!')
  })

  it('It is linked to a game', function() {
    expect(frame.game).toBe(aGame)
  })

  it('from which it initialises its own (frame) score,', function() {
    expect(frame.frameScore).toEqual(frame.game.gameScore)
  })

  it('which it updates after each roll.', function() {
    frame.addRoll(5)
    frame.addRoll(2)
    expect(frame.frameScore).toEqual(7)
  })
})
