describe('Frame', function(){

  var frame;

  describe('returns the number of pins standing', function(){
    
    it('after one roll', function(){
      frame = new Frame();
      frame.roll(3);
      expect(frame.pins).toEqual(7);
      frame = new Frame();
      frame.roll(6);
      expect(frame.pins).toEqual(4);
    });

    it('after two rolls', function(){
      frame = new Frame();
      frame.roll(4);
      frame.roll(5);
      expect(frame.pins).toEqual(1);
      frame = new Frame();
      frame.roll(3);
      frame.roll(2);
      expect(frame.pins).toEqual(5);
    });

  });

  describe('is over if there has been', function(){

    it('two rolls', function(){
      frame = new Frame();
      expect(frame.is_over).toEqual(false);
      frame.roll(3);
      frame.roll(5);
      expect(frame.is_over).toEqual(true);

    });

    it('a strike', function(){
      frame = new Frame();
      expect(frame.is_over).toEqual(false);
      frame.roll(10);
      expect(frame.is_over).toEqual(true);
      
    });

  });

  describe('knows if there has been', function(){
    
    it('a strike', function(){
      frame = new Frame();
      expect(frame.strike).toEqual(false);
      frame.roll(10);
      expect(frame.strike).toEqual(true);
    });

    it('a spare', function(){
      frame = new Frame();
      expect(frame.spare).toEqual(false);
      frame.roll(5);
      expect(frame.spare).toEqual(false);
      frame.roll(5);
      expect(frame.spare).toEqual(true);
    });

    it('a non bonus roll', function(){
      frame = new Frame();
      frame.roll(3);
      frame.roll(4);
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
    });

  });




});