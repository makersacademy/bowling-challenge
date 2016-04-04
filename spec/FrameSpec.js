describe('Frame', function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    roll = 3
    strike = 10
  });

  // it('checks number of pins knocked down', function(){
  //   expect(frame.checkPins()).toEqual(0);
  // });

  it('removes no pins when gutter roll', function(){
    var gutterRoll = 0
    frame.newRoll(gutterRoll)
    expect(frame.roll).toContain(0)
  });

  it('removes 3 pins after roll', function(){
    frame.newRoll(roll)
    expect(frame.roll).toContain(3)
  });

  it('stores first roll when completed', function(){
    frame.newRoll(roll);
    expect(frame.roll).toContain(roll);
  })

  it('stores second roll when completed', function(){
    var roll2 = 8
    frame.newRoll(roll);
    frame.newRoll(roll2);
    expect(frame.game[0]).toContain(roll)
    expect(frame.game[0]).toContain(roll2)
  })

  it('stores mutiple frames', function(){
    for (var i = 1; i < 5; i++) {
      frame.newRoll(roll);
    };
    expect(frame.game.length).toBe(2);
  })

  it('stores a strike and empties array', function(){
    frame.newRoll(strike);
    expect(frame.roll).toEqual([ ])
    expect(frame.game[0][0]).toEqual(strike)
    expect(frame.game[0][1]).toEqual(0)
  })

  it('sums scores up for two frames', function(){
    for (var i = 1; i < 5; i++) {
      frame.newRoll(roll);
    };
    expect(frame.finalize()).toEqual(12)
  })

  it('Adds strike bonus to finalzie scores', function(){
    frame.newRoll(strike);
    frame.newRoll(3);
    frame.newRoll(3);
    expect(frame.finalize()).toEqual(22)
  })

  it('Adds spare bonus to finalzie scores', function(){
    frame.newRoll(7);
    frame.newRoll(3);
    frame.newRoll(3);
    frame.newRoll(3);
    expect(frame.finalize()).toEqual(19)
  })

  it('completes game when 10 frames have been completed', function(){
    for (var i = 1; i < 21; i++) {
      frame.newRoll(roll);
    };
    expect(function(){
      frame.newRoll(roll);
    }).toThrowError('Game completed')
  });

  it('allows second go if 10th frame is a strike', function(){
    for (var i = 1; i < 19; i++) {
      frame.newRoll(roll);
    };
    frame.newRoll(strike);
    frame.newRoll(roll);
    expect(frame.game[game.length-1]).toContain(roll)
  })


  it('allows third go if 11th frame is a strike', function(){

  })

})
