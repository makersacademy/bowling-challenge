'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('can add rolls', function(){
    expect(frame.addRoll).toBeDefined();
  });

  it('can return the rolls', function(){
    let ROLL = { score: 6 };
    frame.addRoll(ROLL);
    expect(frame.getRolls()[0]).toEqual(ROLL);
  });
});
