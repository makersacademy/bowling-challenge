describe('Frame', function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    roll = 3
  });

  // it('checks number of pins knocked down', function(){
  //   expect(frame.checkPins()).toEqual(0);
  // });

  it('removes no pins when gutter roll', function(){
    var gutterRoll = 0
    frame.newRoll(gutterRoll)
    expect(frame.game).toContain(0)
  });

  it('removes 3 pins after roll', function(){
    frame.newRoll(roll)
    expect(frame.game).toContain(3)
  });

  it('stores first roll when completed', function(){
    frame.newRoll(roll);
    expect(frame.game).toContain(roll);
  })

  it('stores second roll when completed', function(){
    var secondRoll = 4
    frame.newRoll(roll);
    frame.newRoll(secondRoll);
    expect(frame.game).toContain(roll)
    expect(frame.game).toContain(secondRoll)
  })

  it('stop player from rolling more than 2 goes', function(){
    frame.newRoll(roll);
    frame.newRoll(roll);
    expect(function(){
      frame.newRoll(roll);
    }).toThrowError('To many goes man');
  })

})
