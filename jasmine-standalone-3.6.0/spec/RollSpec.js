describe("Roll", () => {
  let roll

  it('checks for a strike', () => {
    roll = new Roll([10])
    expect(roll.strike()).toEqual(true)
  })

  it('checks for a spare', () => {
    roll = new Roll([3, 7])
    expect(roll.spare()).toEqual(true)
  })

  it('returns the roll score', () => {
    roll = new Roll([3, 7])
    expect(roll.score()).toEqual(10)
  })

  it('returns the first roll', () => {
    roll = new Roll([5, 2])
    expect(roll.first()).toEqual(5)
  })

  it('scores the last roll', () => {
    roll = new Roll([10, 10, 10])
    expect(roll.tenth()).toEqual(30)
  })
})
