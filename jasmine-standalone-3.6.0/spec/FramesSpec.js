describe('Frames', () => {
  let frames
  let mockscore
  let mockroll

  beforeEach(function() {
    mockscore = {
      strike: (frame, roll) => {}
    }
    mockroll = {}
    frames = new Frames(mockscore, mockroll)
  })

  it('adds a new key value pair of the frame and its rolls', () => {
    frames.add(1, [3, 5])
    expect(frames.add(1, [3, 5])).toEqual([['1', mockroll]])
  })

  it('can add multiple key value pairs', () => {
    frames.add(1, [3, 5])
    frames.add(2, [10])
    frames.add(3, [4, 6])
    expect(frames.add(1, [3, 5])).toEqual([['1', [3, 5]], ['2', [10]], ['3', [4, 6]]])
  })

  describe('run', () => {
    it('calculates the score', () => {
      frames.add(1, [10])
      frames.add(2, [10])
      frames.add(3, [4, 6])
      expect(frames.run()).toEqual(50)
    })
  })
})
