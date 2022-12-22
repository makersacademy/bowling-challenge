const Frame = require ('../lib/frame')



describe('a frame of bowling', () => {
  it('returns the score for each roll in the frame', () => {
    const frame = new Frame(4, 5)
    expect(frame.frame_rolls()).toEqual ([4, 5])
  });

  it('returns the total score for each the frame', () => {
    const frame = new Frame(4, 5)
    expect(frame.total_frame_points()).toEqual (9)
  });

  it('returns 0 for a gutter frame', () => {
    const frame = new Frame(0, 0)
    expect(frame.total_frame_points()).toEqual (0)
  });

  it('returns true if a spare scored in the frame', () => {
    const frame = new Frame(3, 7)
    expect(frame.frame_rolls()).toEqual ([3, 7])
    expect(frame.total_frame_points()).toEqual (10)
    expect(frame.spare()).toBe (true)

  });

  it('returns true if a strike scored in the frame', () => {
    const frame = new Frame(10)
    expect(frame.frame_rolls()).toEqual ([10, 0])
    expect(frame.total_frame_points()).toEqual (10)
    expect(frame.strike()).toBe (true)
  });

  it('returns true if a strike scored in the frame', () => {
    const frame = new Frame(5, 5)
    expect(frame.frame_rolls()).toEqual ([5, 5])
    bonus_frame = new Frame(4)
    expect(bonus_frame.bonus_frame_rolls()).toEqual ([4, 0])
    expect(frame.spare()).toBe (true)
  });
});

