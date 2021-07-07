'use strict';

describe('Roll', function(){
  var roll;

  beforeEach(function(){
    roll = new Roll();
  });

  it('can have frame number and points set', function(){
    roll.setpoints(1,8)
    expect(roll.frameNumber).toEqual(1);
    expect(roll.PINS).toEqual(8);
    });
});
