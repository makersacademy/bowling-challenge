describe('Roll', function() {
  var roll
  beforeEach(function() {
     roll = new Roll();
  });

  it('allows a user to enter the number of pins knocked down', function() {
    roll.enterPinsDown(5);
    expect(roll.pinsDown).toEqual(5);
  });

});
