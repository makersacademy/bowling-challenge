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

describe('isSpare', function() {
  let spare = new Frame;
  let notSpare = new Frame;

  it ('should know when a spare was rolled', function() {
    spare.roll(4)
    spare.roll(6)

    expect(spare.isSpare()).toEqual(true)
  })
  it ('should know when a spare was not rolled', function() {
    notSpare.roll(3)
    notSpare.roll(4)

    expect(notSpare.isSpare()).toEqual(false)
  })
})

describe('count', function() {
  let frame = new Frame;
  let anotherFrame = new Frame;

  it ('can count up the pins rolled per frame', function() {
    frame.roll(4)
    frame.roll(3)

    expect(frame.count()).toEqual(7)
  })
  it ('can count up the pins rolled per frame', function() {
    anotherFrame.roll(4)
    anotherFrame.roll(5)

    expect(anotherFrame.count()).toEqual(9)
  })
})