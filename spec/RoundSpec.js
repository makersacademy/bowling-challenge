describe('Round', function() {
  beforeEach(function() {
    round = new Round();
  });

  it('stores pins boweld', function() {
    round.bowl(8)
    round.bowl(1)
    expect(round.score).toEqual(9)
  });

  it('knows if its a strike', function() {
    round.bowl(10)
    expect(round.strike).toEqual(true)
    expect(round.spare).toEqual(false)
  });



  it('knows if it is a spare', function() {
    round.bowl(5)
    round.bowl(5)
    expect(round.spare).toEqual(true)
    expect(round.strike).toEqual(false)
  });

});
