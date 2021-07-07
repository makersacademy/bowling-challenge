'use strict';

describe('Tracker', function(){
  var tracker;
  var roll;

  beforeEach(function(){
    tracker = new Tracker
    roll = new Roll
    roll.setpoints(1,5)
  });

  it('starts with an empty array of rolls', function(){
    expect(tracker.ROLLS).toEqual([]);
  });

  it('can add a roll to the tracker', function(){
    tracker.addroll(roll)
    expect(tracker.ROLLS).toEqual([roll]);
  });
});
