describe('Bowling', function() {
  it('initial score is 0', function() {
    bowling = new Bowling();
    expect(bowling.getScore()).toEqual(0);
  })
})
