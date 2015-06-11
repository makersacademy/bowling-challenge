describe('Frame', function() {
  beforeEach(module('BowlingCalc'));
  
  var FrameClass;
  var frame;

  beforeEach(inject(function(_Frame_) {
    FrameClass = _Frame_;
    frame = new FrameClass;
  }));

describe('returns the number of pins standing', function(){
    
    it('after one roll', function(){
      console.log(frame)
      frame.roll(3);
      expect(frame.pins).toEqual(7);
      frame = new FrameClass();
      frame.roll(6);
      expect(frame.pins).toEqual(4);
    });

    it('after two rolls', function(){
      frame.roll(4);
      frame.roll(5);
      expect(frame.pins).toEqual(1);
      frame = new FrameClass();
      frame.roll(3);
      frame.roll(2);
      expect(frame.pins).toEqual(5);
    });
  });

  describe('is over if there has been', function(){

    it('two rolls', function(){
      expect(frame.is_over).toEqual(false);
      frame.roll(3);
      frame.roll(5);
      expect(frame.is_over).toEqual(true);
    });

    it('a strike', function(){
      expect(frame.is_over).toEqual(false);
      frame.roll(10);
      expect(frame.is_over).toEqual(true);
    });
  });

  describe('knows if there has been', function(){
    
    it('a strike', function(){
      expect(frame.strike).toEqual(false);
      frame.roll(10);
      expect(frame.strike).toEqual(true);
    });

    it('a spare', function(){
      expect(frame.spare).toEqual(false);
      frame.roll(5);
      expect(frame.spare).toEqual(false);
      frame.roll(5);
      expect(frame.spare).toEqual(true);
    });

    it('a non bonus roll', function(){
      frame.roll(3);
      frame.roll(4);
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
    });
  });

});