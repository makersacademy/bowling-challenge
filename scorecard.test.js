const Scorecard = require('./scorecard')
const Frame = require('./frame')


describe('scorecard', () => {
  beforeEach(() => {
    scorecard = new Scorecard;
  });
  it('has gets the frame count from the frames array', () => {
    expect(scorecard.getFrameCount()).toBe(1)
  })
  it('has an initial frames array with one new frame in it', () => {
    expect(scorecard.getFrames()).toEqual([new Frame()])
  })
  it('adds a score to the frame if the current frame', () => {
    scorecard.roll(7)
    expect(scorecard.currentFrame().getScore()).toBe(7)
  })
  it('returns true if it is the first frame', () => {
    expect(scorecard.firstFrame()).toBe(true)
  })
  it('returns false if it is the second frame', () => {
    scorecard.roll(10)
    scorecard.roll(1)
    expect(scorecard.firstFrame()).toBe(false)
  })
  it('returns the current frame', () => {
    scorecard.roll(3)
    scorecard.roll(3)
    scorecard.roll(10)
    expect(scorecard.currentFrame()).toBe()
  })
  it('returns the last frame', () => {
    scorecard.roll(10)
    scorecard.roll(3)
    expect(scorecard.lastFrame().isStrike()).toBe(true)
  })
  it('returns a grand total adding up the frames array', () => {
    scorecard.roll(10)
    scorecard.roll(10)
    expect(scorecard.getTotal()).toBe(30)
  })
  it('creates a new frame if the frame is not live', () => {
    scorecard.roll(10)
    scorecard.roll(10)
    expect(scorecard.getFrameCount()).toBe(2)
  })
})