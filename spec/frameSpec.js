describe( 'frame', () => {
  
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('initializes a frame with 2 bowls available', () => {
    expect(frame.bowlsLeft).toEqual(2)
  });

  it('allows you to roll twice', ()=> {
    frame.roll();
    frame.roll();
    expect(frame.bowlsLeft).toEqual(0)
  });

});

