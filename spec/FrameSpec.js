describe('Frame',function(){
  var frame;

  it('can score a gutter frame',function(){
    frame = Frame.create(0,0);
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
});