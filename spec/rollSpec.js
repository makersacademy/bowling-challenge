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

  it('increases the score with up', function(){
    roll.up();
    roll.up();
    roll.up();
    roll.up();
    expect(roll.getCurrentPins()).toEqual(4);
  });

  it('decreases the score with down', function(){
    roll.up();
    roll.down();
    expect(roll.getCurrentPins()).toEqual(0);
  });

  it('decreases the score with down', function(){
    roll.up();
    roll.up();
    roll.up();
    roll.down();
    expect(roll.getCurrentPins()).toEqual(2);
  });

  it('shows when there is a strike', function(){
    expect(roll.showStrike()).toEqual(10);
  });

  // it('limits the amout of pins after the first roll in a frame', function(){
  //   roll.up();
  //   roll.up();
  //   roll.up();
  //   roll.getCurrentPins()
  //   expect(roll.limit(roll, next_roll));
  // });

});
