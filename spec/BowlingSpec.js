describe('Bowling', function() {

  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('is a gutter game', function() {
    turnsPins(20,0);
    expect(bowling.getScore()).toEqual(0);
  });

  it('hits one pin every turn', function() {
    turnsPins(20, 1)
    expect(bowling.getScore()).toEqual(20);
  });

  // it('hits one spare', function() {
  //   expect(bowling.getScore()).toEqual(0);
  // });

  // it('hits one strike', function() {
  //   expect(bowling.getScore()).toEqual(0);
  // });

  // it('hits a perfect game', function() {
  //   expect(bowling.getScore()).toEqual(0);
  // });

  // describe('10th frame', function() {
  //   it('hits a strike', function() {
  //     expect(bowling.getScore()).toEqual(0);
  //   });
  //
  //   it('hits a spare', function() {
  //     expect(bowling.getScore()).toEqual(0);
  //   });
  // });

  function turnsPins(nTurns, pins) {
    for(var i = 0; i < nTurns; i++) {
      bowling.turn(pins);
    }
  }
})
