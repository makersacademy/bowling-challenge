describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  })
  
  it('has current roll', () => {
    expect(frame.currentRoll).toEqual(0);
  })

  it('has rolls remaining', () => {
    expect(frame.rollsRemaining).toEqual(2);
  })
})