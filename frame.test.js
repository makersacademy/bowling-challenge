const Frame = require('./frame')

describe('Creates frame object:', () => {
  it('Creates empty frame', () => {
    const result = new Frame(0, [])
    expect(result.getFrame()).toEqual([])
  })

  it('Creates frame with score', () => {
    const result = new Frame(0, [1, 2])
    expect(result.getFrame()).toEqual([1, 2])
  })

  it('Returns total score for frame', () => {
    const result = new Frame(0, [1, 2])
    expect(result.getTotal()).toBe(3)
  })

  it('Returns strike when strike is entered', () => {
    const result = new Frame(0, [10, 0])
    expect(result.getStrike()).toBe(true)
  })

  it('Returns not strike when [2, 4] is entered', () => {
    const result = new Frame(0, [2, 4])
    expect(result.getStrike()).toBe(false)
  })

  it('Returns spare when spare [5, 5] is entered', () => {
    const result = new Frame(0, [5, 5])
    expect(result.getSpare()).toBe(true)
  })

  it('Returns spare when spare [1, 9] is entered', () => {
    const result = new Frame(0, [1, 9])
    expect(result.getSpare()).toBe(true)
  })

  it('Returns not spare when [1, 7] is entered', () => {
    const result = new Frame(0, [1, 7])
    expect(result.getSpare()).toBe(false)
  })

  it('Returns frame validity on [1, 2] as true', () => {
    const result = new Frame(0, [1, 2])
    expect(result.getValid()).toBe(true)
  })

  it('Returns frame validity on [7, 7] as false', () => {
    const result = new Frame(0, [7, 7])
    expect(result.getValid()).toBe(false)
  })
})
