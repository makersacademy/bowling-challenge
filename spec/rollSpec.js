describe('Roll features', function() {

  var roll;
  beforeEach(function () {
    roll = new Roll();
  });

  it('bowl function gives a random number', function() {
    spyOn(roll, 'randomNumberGenerator').and.returnValue(10)
    roll.bowl(10);
    expect(roll.score).toBe(10);
  });


})
