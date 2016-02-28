describe ('Frame', function(){

  var pins = 5;
  var differentPins = 3;
  var strike = 10;

  beforeEach(function(){
    frame = new Frame();
  })

  it ('the value of _rollOne is 0 when initialized ', function(){
    expect(frame._rollOne).toEqual(null)
  });

  it ('the value of _rollTwo is 0 when initialized ', function(){
    expect(frame._rollTwo).toEqual(null)
  })

  it ('is not complete when initialized', function(){
    expect(frame.isComplete()).toEqual(false);
  })

  describe ('Roll', function(){


    it ('assigns the value passed in to rollOne if it is the first roll of the frame', function(){
      frame.roll(pins);
      expect(frame._rollOne).toEqual(pins);
    })

    it ('assigns the value passed in to rollTwo if it is the second roll of the frame', function(){
      frame.roll(pins)
      frame.roll(differentPins)
      expect(frame._rollTwo).toEqual(differentPins);
    });

    it ('marks the frame as complete after the second roll of the frame', function(){
      frame.roll(pins)
      frame.roll(differentPins)
      expect(frame.isComplete()).toEqual(true);
    });

    it ('marks the frame complete if the first roll is a strike', function(){
      frame.roll(strike)
      expect(frame.isComplete()).toEqual(true);
    });

  });

  describe ('is strike', function(){

    it ('returns true if the frame is a strike', function(){
      frame.roll(strike)
      expect(frame.isStrike()).toEqual(true);
    });

  });

  describe ('is spare', function(){

    it ('returns true if the frame is a spare', function(){
      frame.roll(pins)
      frame.roll(pins)
      expect(frame.isSpare()).toEqual(true);
    });

  });

  describe ('score', function(){

    it ('returns the score of the two rolls when there is not a spare or a strike', function(){
      frame.roll(pins)
      frame.roll(differentPins)
      expect(frame.score()).toEqual(pins + differentPins);
    });

    it ('returns the score of the first roll when the frame is not complete', function(){
      frame.roll(pins)
      expect(frame.score()).toEqual(pins);
    });

    it ('')


  });

});
