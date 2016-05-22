
describe('Frame',function(){

  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('starts with 10 pins standing',function(){
    expect(frame.getPins()).toBe(10)
  });

  it('bowling knocks over pins', function(){
    frame.roll(5)
    expect(frame.getPins()).toBe(5)
  });

  it("can't knock over more pins than there are standing",function(){
    expect(function(){
      frame.roll(11);
    }).toThrowError("Invalid roll")
  });

  it('two rolls max per frame',function(){
    frame.roll(3);
    frame.roll(3);
    expect(function(){
      frame.roll(3);
    }).toThrowError("No rolls left")
  });

  it('records the rolls', function(){
    frame.roll(3);
    expect(frame.getRolls()).toEqual([3])
    frame.roll(6);
    expect(frame.getRolls()).toEqual([3,6])
  });

  it('is a spare if all 10 pins are knocked down in 2 rolls',function(){
    frame.roll(7);
    frame.roll(3);
    expect(frame.isSpare()).toBe(true)
    expect(frame.isStrike()).toBe(false)
  });

  it('is a strike if all 10 pins are knocked down in 1 roll',function(){
    frame.roll(10);
    expect(frame.isSpare()).toBe(false)
    expect(frame.isStrike()).toBe(true)
  });

  it('strike means no more rolls left', function(){
    frame.roll(10);
    expect(function(){
      frame.roll(3);
    }).toThrowError("No rolls left")
  });

});
