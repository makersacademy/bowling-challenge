'use strict';

describe('frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('records the number of pins knocked down on a single roll', function(){
    frame.recordRoll(7)
    expect(frame.points()).toEqual(7)
  })

  it('records the number of pins knocked down over two rolls', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.points()).toEqual(9)
  })
})
