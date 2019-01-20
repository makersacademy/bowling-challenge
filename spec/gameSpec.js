describe  ('Game', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Game();
  })

  it('can score a gutter game', function() {
    for(let i = 0; i < 20; i++) { bowling.roll(0) }
    expect(bowling.getScore()).toEqual(0)
  })

  it('can score 20 points', function() {
    for(let i = 0; i < 20; i++) { bowling.roll(1) }
    expect(bowling.getScore()).toEqual(20)
  })

  it('can roll multiple balls and succesfully accumulate points', function() {
    bowling.roll(4)
    bowling.roll(3)
    for(let i = 0; i < 18; i++) { bowling.roll(0) }
    expect(bowling.getScore()).toEqual(7)
  })

  it('can earn bonus in case of spare', function() {
    bowling.roll(5)
    bowling.roll(5)
    bowling.roll(5)
    for(let i = 0; i < 18; i++) { bowling.roll(0) }
    expect(bowling.getScore()).toEqual(20)
  })

  it('can get bonus in case of strike', function() {
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(5);
    for(let i = 0; i < 18; i++) { bowling.roll(0) }
    expect(bowling.getScore()).toEqual(30);
  })

  it('can win a perfect game with the score of 300 points', function() {
    for(let i = 0; i < 10; i++) { bowling.roll(10) }
    bowling.roll(10);
    bowling.roll(10);
    expect(bowling.getScore()).toEqual(300)
  })
})
