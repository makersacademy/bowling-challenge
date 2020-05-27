'use strict';

describe('Roll', function() {
  var roll;

  beforeEach(function(){
    roll = new Roll();
    var score = [1, 2];
  });

  it('pins knocked down starts at 0', function() {
    expect(roll.getCurrentPins()).toEqual(0);
  });

  it('increases the score with up', function() {
    roll.up();
    expect(roll.getCurrentPins()).toEqual(1);
  });

  it('increases the score with up', function() {
    roll.up();
    roll.up();
    roll.up();
    roll.up();
    expect(roll.getCurrentPins()).toEqual(4);
  });

  it('decreases the score with down', function() {
    roll.up();
    roll.down();
    expect(roll.getCurrentPins()).toEqual(0);
  });

  it('decreases the score with down', function() {
    roll.up();
    roll.up();
    roll.up();
    roll.down();
    expect(roll.getCurrentPins()).toEqual(2);
  });


  it('shows when there is a strike', function() {
    expect(roll.showStrike()).toEqual(10);
  });

  it('resets the score to zero', function(){
    for (var i = 0; i < 6; i++) {
    roll.up()
  }
   score = [1, 2]
    expect(roll.reset(roll, score)).toEqual(0);
  });

});
