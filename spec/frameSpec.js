describe( 'frame', () => {
  
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('initializes a frame with 2 bowls available', () => {
    expect(frame.bowlsLeft).toEqual(2)
  });

  it('each roll reduces the number of bowls left by 1', () => {
    frame.roll();
    expect(frame.bowlsLeft).toEqual(1)
  });

  it('allows you to roll twice', ()=> {
    frame.roll();
    frame.roll();
    expect(frame.bowlsLeft).toEqual(0)
  });

  it('ends a frame after 2 bowls', ()=> {
    frame.roll();
    frame.roll();
    expect(frame.frameOver).toEqual(true)
  });

});

