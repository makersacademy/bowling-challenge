describe('roll', function() {
  let frame = new Frame;

  it ('should be empty before the first roll', function() {
    expect(frame.rolls).toEqual([])
  });
  it ('can receive user input and save it', function() {
    frame.roll(3)
    frame.roll(5)

    expect(frame.rolls).toEqual([3, 5])
  });
});

describe('isStrike', function() {
  let strike = new Frame;
  let notStrike = new Frame;

  it ('should know when a roll is a strike', function() {
    strike.roll(10)

    expect(strike.isStrike()).toEqual(true)
  })
  it ('should know when a roll is not a strike', function() {
    notStrike.roll(3)

    expect(notStrike.isStrike()).toEqual(false)
  })
})
