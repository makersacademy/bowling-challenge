describe('A frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with 10 pins', function(){
    expect(frame._standingPins).toEqual(10);
  });

  it('generates a random number of knockedPins', function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    expect(frame.rollOne()).toEqual(5);
  });

  describe('with two seperate rolls', function (){

    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.rollOne();
      frame.rollTwo();
      frame.knockedPins();
    });

    it('stores the knocked pins in two seperate rolls', function() {
      expect(frame.remainingPins()).toEqual(4);
    });

  });
    it('Understands a strike', function(){
      spyOn(Math, 'random').and.returnValue(0.99)
      frame.rollOne();
      expect(frame.isStrike()).toEqual(true);
    });

    it('Understands a spare', function (){
      spyOn(Math, 'random').and.returnValue(0.5)
      frame.rollOne();
      frame.rollTwo();
      expect(frame.isSpare()).toEqual(true);

    });

});
