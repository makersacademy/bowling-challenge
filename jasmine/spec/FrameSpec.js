describe('Frame', function(){
    var pins;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with a score of 0', function(){
    expect(frame.frameScore).toEqual(0);
  })

  it('first bowl returns a score of 7', function(){
    frame.bowlOne(7);
    expect(frame.amountOfPinsOne).toEqual(7);
  });

  it('second bowl returns score of 2', function(){
    frame.bowlTwo(2)
    expect(frame.amountOfPinsTwo).toEqual(2);
  })

  it('combines the score of bowl 1 and bowl 2', function(){
    frame.bowlOne(7);
    frame.bowlTwo(2);
    frame.calculate();
    expect(frame.frameScore).toEqual(9);
  })

  it('awards a spare for scoring 10 over two bowls', function(){
    frame.bowlOne(7);
    frame.bowlTwo(3);
    expect(frame.spare).toBeTruthy();
  })

  it('awards a strike for scoring 10 in the first bowl', function(){
    frame.bowlOne(10);
    expect(frame.strike).toBeTruthy();
  })

  it('does not add to the frame score if player scores a strike', function(){
    frame.bowlOne(10);
    frame.calculate();
    expect(frame.frameScore).toEqual(0);
  })

  it('does not add to the frame score if the player scores a spare', function(){
    frame.bowlOne(6);
    frame.bowlTwo(4);
    frame.calculate();
    expect(frame.frameScore).toEqual(0);
  })

})
