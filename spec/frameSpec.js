describe( 'Frame', () => {
  
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('initializes a frame with 2 bowls available', () => {
    expect(frame.bowlsLeft).toEqual(2)
  });

  it('each bowl reduces the number of bowls left by 1', () => {
    frame.bowl();
    expect(frame.bowlsLeft).toEqual(1)
  });

  it('allows you to bowl twice', ()=> {
    frame.bowl();
    frame.bowl();
    expect(frame.bowlsLeft).toEqual(0)
  });

  it('ends a frame after 2 bowls', ()=> {
    frame.bowl();
    frame.bowl();
    expect(frame.isFrameOver).toEqual(true)
  });

});

