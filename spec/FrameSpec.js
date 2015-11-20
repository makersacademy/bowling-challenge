describe('Frame',function(){
  var frame;
  beforeEach(function(){
    frame = Frame.create(0,0);
  });

  it('can score a gutter frame',function(){
    expect(frame.score()).toEqual(0);
  });

  it('can score a single roll',function(){
    frame = Frame.create(3,0);
    expect(frame.score()).toEqual(3);
  });

  it('can score a double roll',function(){
    frame = Frame.create(3,6);
    expect(frame.score()).toEqual(9);
  });

  it('can take spare scoring into account',function(){
    frame = Frame.create(7,3);
    frame.addNextFrame(Frame.create(4,2)); 
    expect(frame.score()).toEqual(20);
  });

  it('can take strike scoring into account',function(){
    frame = Frame.create(10,0);
    frame.addNextFrame(Frame.create(4,2)); 
    expect(frame.score()).toEqual(22);
  });
});