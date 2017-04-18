describe ('FinalFrame', function(){

  var pins = 5;
  var differentPins = 3;
  var strike = 10;

  beforeEach(function(){
    frame = new FinalFrame();
  })

  it ('the value of _rollOne is 0 when initialized ', function(){
    expect(frame._rollOne).toEqual(null)
  });

  it ('the value of _rollTwo is 0 when initialized ', function(){
    expect(frame._rollTwo).toEqual(null)
  })

  it ('the value of _rollThree is 0 when initialized ', function(){
    expect(frame._rollThree).toEqual(null)
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

    it ('marks the frame as complete after the second roll of the frame and there is no stike or spare', function(){
      frame.roll(pins)
      frame.roll(differentPins)
      expect(frame.isComplete()).toEqual(true);
    });

    it ('does not mark the frame complete if the first roll is a strike, but assigns the score to rollOne', function(){
      frame.roll(strike)
      expect(frame.isComplete()).toEqual(false);
      expect(frame._rollOne).toEqual(strike);
    });

    it ('does not mark the frame complete if the second roll is a spare, but assigns the score to rollTwo', function(){
      frame.roll(pins)
      frame.roll(pins)
      expect(frame.isComplete()).toEqual(false);
      expect(frame._rollTwo).toEqual(pins);
    });

    it ('allows a third roll if there is a strike, then assigns third roll to rollThree marks the frame complete', function(){
      frame.roll(strike)
      frame.roll(strike)
      frame.roll(pins)
      expect(frame.isComplete()).toEqual(true);
      expect(frame._rollThree).toEqual(pins);
    })

    it ('ends the frame on roll three even if the roll is a strike', function(){
      frame.roll(strike)
      frame.roll(strike)
      frame.roll(strike)
      expect(frame.isComplete()).toEqual(true);
      expect(frame._rollThree).toEqual(strike);
    })

  });



});
