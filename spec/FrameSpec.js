describe('Frame',function(){
  var frame;
  beforeEach(function(){
    frame = new Frame(0,0);
  });

  it('can score a gutter frame',function(){
    expect(frame.score()).toEqual(0);
  });

  it('can score a single roll',function(){
    frame = new Frame(3,0);
    expect(frame.score()).toEqual(3);
  });

  it('can score a double roll',function(){
    frame = new Frame(3,6);
    expect(frame.score()).toEqual(9);
  });

  it('can score a spare',function(){
    frame = new Frame(7,3);
    frame.addNextFrame(new Frame(4,2)); 
    expect(frame.score()).toEqual(14);
  });
});