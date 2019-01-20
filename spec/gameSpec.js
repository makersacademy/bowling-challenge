describe  ('Game', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Game();
  })

  it('can score a gutter game', function() {
    for(let i = 0; i < 20; i++) { bowling.roll(0) }
    expect(bowling.getScore()).toEqual(0)
  })
})
