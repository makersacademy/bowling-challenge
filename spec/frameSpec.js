describe( 'Frame', () => {
  
  let frame;
  let scoreCard;

  beforeEach(() => {
    frame = new Frame();
    scoreCard = new scoreCard();
  });

  it('allows you to roll', () => {
    frame.roll;
    expect(scoreCard).toEqual(score);
  });
});