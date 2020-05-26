'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function(){
    roll = new Roll();
  });

  it('pins knocked down starts at 0', function() {
    expect(roll.getCurrentPins()).toEqual(0);
  });

  it('increases the score with up', function() {
    roll.up();
    expect(roll.getCurrentPins()).toEqual(1);
  });

  it('decreases the score with down', function() {
    roll.up();
    roll.down();
    expect(roll.getCurrentPins()).toEqual(0);
  });

  it('shows when there is a strike', function() {
    expect(roll.showStrike()).toEqual(10);
  });

  it('can be reset to zero for a new game', function() {
    for (var i = 0; i < 6; i++) {
      roll.up();
    }
    roll.reset();
    expect(roll.getCurrentPins()).toEqual(0);
  });

});
