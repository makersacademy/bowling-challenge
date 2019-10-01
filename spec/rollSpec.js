describe('Roll', function() {
  var roll
  beforeEach(function() {
     roll = new Roll();
  });

  it('allows a user to enter the number of pins knocked down', function() {
    roll.enterPinsDown(5);
    expect(roll.pinsDown).toEqual(5);
  });

  it('knows which roll it is', function() {
    roll.enterPinsDown(3);
    roll.enterRollNumber(1);
    expect(roll.number).toEqual(1);
  })

});
