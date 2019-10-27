'use strict';

describe('Frame', function(){
  var frame;
  var roll;
  var roll2;

  beforeEach(function(){
    frame = new Frame(1);
    roll = new Roll();
    roll2 = new Roll();
  });

  it('stores a number to identify itself', function(){
    expect(frame.NUMBER).toEqual(1);
  });

  it('starts with a total point score of zero', function(){
    expect(frame.POINTS).toEqual(0);
  });

  it('can set a bonus value', function(){
    frame.setbonus(10)
    expect(frame.BONUS).toEqual(10)
  })

  it('adds a bonus value to the normal points value', function(){
    roll.setpoints(1,3);
    frame.firstroll(roll);
    roll2.setpoints(1,4);
    frame.secondroll(roll2);
    frame.setbonus(10);
    expect(frame.returnscore()).toEqual(17)
  });

  it('can update the total points for the frame', function(){
    frame.addpoints(7);
    expect(frame.returnscore()).toEqual(7)
  });

  it('records a strike has occured', function(){
    roll.setpoints(1,10)
    frame.firstroll(roll);
    expect(frame.strike).toBe(true);

  });

  it('records a spare has occured', function(){
    roll.setpoints(1,3);
    frame.firstroll(roll);
    roll2.setpoints(1,7);
    frame.secondroll(roll2);
    expect(frame.spare).toBe(true);

  });
});
