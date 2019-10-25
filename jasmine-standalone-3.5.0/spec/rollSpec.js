'use strict';

describe('Roll', function(){
  var roll;

  beforeEach(function(){
    roll = new Roll();
  });

  it('can have frame number and points set', function(){
    roll.setpoints(1,8)
    expect(roll.frameNumber).toEqual(1);
    expect(roll.points).toEqual(8);
    });

  it('can have a bonus value set', function(){
    roll.bonus(10)
    expect(roll.bonus).toEqual(10)
  });
});
