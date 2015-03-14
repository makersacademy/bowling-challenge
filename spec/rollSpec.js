describe('Roll', function() {

  beforeEach(function() {
    roll = new Roll
  })

  it('starts each roll with a roll score of 0', function() {
    expect(roll.getPinsHit()).toEqual(0);
  });

  it('knows to count 0 when 0 pins are hit', function() {
    roll.setPinsHit(0);
    expect(roll.getPinsHit()).toEqual(0);
  });

  it('knows to count 10 if 10 pins are hit', function() {
    roll.setPinsHit(10);
    expect(roll.getPinsHit()).toEqual(10)
  });

  it('cannot have a score greater than 10, 0 is returned', function(){
    roll.setPinsHit(11)
    expect(roll.getPinsHit()).toEqual(0)
  });

});