describe( 'frame', () => {
  
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it('allows you to roll twice', ()=> {
    frame.roll;
    frame.roll;
    expect(frame).toEqual(frameOver)
  });
});

