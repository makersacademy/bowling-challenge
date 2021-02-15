describe('Frame', () => {
  let frame;

  beforeEach( () => { frame = new Frame; });

  it('ends the turn when a strike is rolled and makes bonus = 2', () => {
    frame.addTurn(10);
    expect(frame.inTurn).toEqual(false);
    expect(frame.bonus).toEqual(2);
  });

  it('ends the turn after 2 rolls and bonus is still = 0', () => {
    frame.addTurn(2); frame.addTurn(2);
    expect(frame.inTurn).toEqual(false);
    expect(frame.bonus).toEqual(0);
  });

  it('ends the turn when a spare is rolled and makes bonus = 1', () => {
    frame.addTurn(8); frame.addTurn(2);
    expect(frame.inTurn).toEqual(false);
    expect(frame.bonus).toEqual(1);
  });

  it('turn is still active after one roll', () => {
    frame.addTurn(8);
    expect(frame.inTurn).toEqual(true);
  });

})
