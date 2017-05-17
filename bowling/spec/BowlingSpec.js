describe('Bowling', function() {
  var bowling = new Bowling

  it('begins a game with an empty score card', function() {
    expect(bowling.score).toEqual(0);
  })
});
