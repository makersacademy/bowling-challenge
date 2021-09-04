describe('Frame', () => {

  beforeEach(() => {
    frame = new Frame();
  });

  it('stores the number of pins knocked down on the first roll of a frame', () => {
    frame.first_roll(5);
    expect(frame.roll_one).toEqual(5);
  });

  it('stores the number of pins knocked down on the second roll of a frame', () => {
    frame.second_roll(3);
    expect(frame.roll_two).toEqual(3);
  });

  it('throws an error if the number entered isn\'t between 0 - 10 for a single roll', () => {
    expect( () => { frame.first_roll(11); } ).toThrow(Error('Please enter a number between 0 - 10'));
    expect( () => { frame.second_roll(-20); } ).toThrow(Error('Please enter a number between 0 - 10'));
  });

  it('throws an error if a number isn\'t entered', () => {
    expect( () => { frame.first_roll('string'); } ).toThrow(Error('Please enter a number'));
    expect( () => { frame.second_roll(11.34); } ).toThrow(Error('Please enter a number'));
  });


});

