describe('Roll', function() {

  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('returns random number from 0 to 10', function() {
    expect(roll._randomThrower).toEqual(jasmine.any(Number));
  });
});
