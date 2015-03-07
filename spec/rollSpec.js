describe('Roll', function() {

  beforeEach(function() {
    roll = new Roll
  })

  it('starts each roll with a roll score of 0', function() {
    expect(roll.rollScore).toEqual(0);
  });

  it('knows to count 0 when 0 pins are hit', function() {
    roll.hits(0)
    expect(roll.rollScore).toEqual(0);
  });

  it('knows')



});