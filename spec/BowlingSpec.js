describe('Bowling', function() {

  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts with 0 points', function() {
    expect(bowling.getScore()).toEqual(0);
  });

  // it('is a gutter game', function() {
  //   expect(bowling.getScore()).toEqual(0);
  // });

  // it('hits one pin every turn', function() {
  //   expect(bowling.getScore()).toEqual(0);
  // });

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
})
