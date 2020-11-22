
describe('Bowllng Engine', () => {
  beforeEach(() => {

  });

  it('accepts an entry of downed pins', () => {
    pinsAdd(5);
    expect(pinsArray).toEqual(['5']);
  });

  it('identifies a completed frame', () => {
    let pinsArray = ['5','3'];
    let framesArray = [];
    expect(isFrameComplete(framesArray, pinsArray)).toBeTruthy();
  })

  it('can add a frame to the framesarray', () => {
    let pinsArray = ['5','3'];
    expect(framesArrayAdd(pinsArray)).toEqual([{pinsArray: ['5','3'], frameScore: ''}]);
  });
});
