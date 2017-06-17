describe('Roll features', function() {

  var roll;
  beforeEach(function () {
    roll = new Roll();
  });

  it('bowl function gives a random number', function() {
    roll.bowl(10);
    expect(roll.score).toBeLessThan(11);
  });
})
