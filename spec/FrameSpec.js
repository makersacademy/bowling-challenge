describe("Frame", () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('returns the total score for a single frame of 2 rolls', () => {
    frame.add([3,3]);
    expect(frame.totalScore()).toEqual(6);
  });

  it('returns the total score in a game', () => {
    for(let i = 0; i < 10; i++) {
      frame.add([3,3]);
    }
    expect(frame.totalScore()).toEqual(60);
  });

  it('returns the score for a spare and the bonus points in next frame', () => {
    frame.add([5,5]);
    frame.add([3,2]);
    expect(frame.totalScore()).toEqual(18);
  });

  it('returns the score for a strike and the bonus points for the next 2 rolls', () => {
    frame.add([10]);
    frame.add([10]);
    frame.add([5,3]);
    expect(frame.totalScore()).toEqual(51);
  });

  it('can score a perfect game (all strikes)', () => {
    for(let i = 0; i < 10; i++) {
      frame.add(10);
    }
    expect(frame.totalScore()).toEqual(300);
  });

  // it('gives an extra shot in the 10th frame when first shot is a strike', () => {

  // });
});
