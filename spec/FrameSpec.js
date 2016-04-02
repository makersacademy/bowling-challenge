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

  it('stores a strike and empties array', function(){
    var strike = 10
    frame.newRoll(strike);
    expect(frame.roll).toEqual([ ])
    expect(frame.game[0]).toContain(strike)
  })

  // it('sums scores up'), function(){
  //   for (var i = 1; i < 21; i++){
  //     frame.newRoll(roll);
  //   }
  //   expect(this.)
  // }

})
