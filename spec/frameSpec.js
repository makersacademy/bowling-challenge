describe('Frame', () => {

  beforeEach(() => {
    frame = new Frame();
  });

  it('stores the number of pins knocked down on the first roll of a frame', () => {
    frame.firstRoll(5);
    expect(frame.roll_one).toEqual(5);
  });

  it('stores the number of pins knocked down on the second roll of a frame', () => {
    frame.secondRoll(3);
    expect(frame.roll_two).toEqual(3);
  });

  it('throws an error if the number entered isn\'t between 0 - 10 for a single roll', () => {
    expect( () => { frame.firstRoll(11); } ).toThrow(Error('Please enter a number between 0 - 10'));
    expect( () => { frame.secondRoll(-20); } ).toThrow(Error('Please enter a number between 0 - 10'));
  });

  it('throws an error if a number isn\'t entered', () => {
    expect( () => { frame.firstRoll('string'); } ).toThrow(Error('Please enter a number'));
    expect( () => { frame.secondRoll(11.34); } ).toThrow(Error('Please enter a number'));
  });


});

