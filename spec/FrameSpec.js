
describe('Frame',function(){

  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it("can't knock over more pins than there are standing",function(){
    expect(function(){
      frame.roll(11);
    }).toThrowError("Invalid roll")
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

  describe('normal frame',function(){

    it('strike means no more rolls left', function(){
      frame.roll(10);
      expect(function(){
        frame.roll(3);
      }).toThrowError("No rolls left")
    });

    it('two rolls max per frame',function(){
      frame.roll(3);
      frame.roll(3);
      expect(function(){
        frame.roll(3);
      }).toThrowError("No rolls left")
    });
  });


  describe('final frame',function(){
    beforeEach(function(){
      frame.setFinalFrame();
    });

    it('max three rolls even if all strikes',function(){
      frame.roll(10);
      frame.roll(10);
      expect(function(){
        frame.roll(10);
      }).not.toThrowError("No rolls left")
      expect(function(){
        frame.roll(2);
      }).toThrowError("No rolls left")
    });
  });
});
