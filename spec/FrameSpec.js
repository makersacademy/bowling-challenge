describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('isComplete', function(){
    it('should be false by default', function(){
      expect(frame.isComplete()).toBe(false);
    });

    it('should be true after two rolls', function(){
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('total', function(){
    it('knows the total score of two rolls', function(){
      frame.addRoll(5);
      frame.addRoll(3);
      expect(frame.total()).toEqual(8);
    });

    it('knows the total score with one roll', function(){
      frame.addRoll(5);
      expect(frame.total()).toEqual(5);
    });

    it('returns 0 when no rolls', function(){
      expect(frame.total()).toEqual(0);
    });


  });

  it('knows the first roll', function(){
    frame.addRoll(4);
    expect(frame.roll1()).toEqual(4);
  });

  it('knows the second roll', function(){
    frame.addRoll(4);
    frame.addRoll(3);
    expect(frame.roll2()).toEqual(3);
  });

  describe('addRoll', function(){
    it('can add and save two rolls', function(){
      frame.addRoll(3);
      frame.addRoll(6);
      expect(frame.rollsContain(3)).toBe(true);
      expect(frame.rollsContain(6)).toBe(true);
    });

    it('shouldnt add more than 2 rolls', function(){
      frame.addRoll(5);
      frame.addRoll(2);
      frame.addRoll(3);
      expect(frame.rollsContain(3)).toBe(false);
    });

    it('should throw an error when adding a roll > 10', function(){
      expect(function(){ frame.addRoll(11) }).toThrowError('Cannot add a roll over 10');
    });

    it('should throw an error when sum of rolls > 10', function(){
      frame.addRoll(9);
      expect(function(){ frame.addRoll(2) }).toThrowError('Sum of rolls cant be over 10');
    });
  });

  describe('when first roll is 10', function(){
    beforeEach(function(){
      frame.addRoll(10);
    });

    it('should mark frame as complete', function(){
      expect(frame.isComplete()).toBe(true);
    });

    it('knows its a strike', function(){
      expect(frame.isStrike()).toBe(true);
    });
  });

  it('is not a strike when first roll is not 10', function(){
    frame.addRoll(8);
    expect(frame.isStrike()).toBe(false);
  });

  it('is a spare when sum of rolls is 10', function(){
    frame.addRoll(8);
    frame.addRoll(2);
    expect(frame.isSpare()).toBe(true);
  });

  it('is a spare when sum of rolls is 10', function(){
    frame.addRoll(8);
    frame.addRoll(1);
    expect(frame.isSpare()).toBe(false);
  });
});
