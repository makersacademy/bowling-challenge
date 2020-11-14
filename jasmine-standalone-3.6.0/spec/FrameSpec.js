describe("Frame", () => {
  let frame

  it('checks for a strike', () => {
    frame = new Frame([10])
    expect(frame.isStrike()).toEqual(true)
  })

  it('checks for a spare', () => {
    frame = new Frame([3, 7])
    expect(frame.isSpare()).toEqual(true)
  })

  it('returns the roll score', () => {
    frame = new Frame([3, 7])
    expect(frame.score()).toEqual(10)
  })

  it('returns the first roll', () => {
    frame = new Frame([5, 2])
    expect(frame.first()).toEqual(5)
  })

  it('scores the last roll', () => {
    frame = new Frame([10, 10, 10])
    expect(frame.tenth()).toEqual(30)
  })
})
