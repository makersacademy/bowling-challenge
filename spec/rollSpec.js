
describe('Roll', function() {
  var Roll = require('../lib/roll');
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('return the number of pins knocked down', function() {
    expect(roll.new()).toBeWithinRange(0, 10);
  });
});
