'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with a total of 0', function(){
    expect(frame.total).toEqual(0);
  });

  it('adds the number of fallen pins to the total', function() {
    frame.roll(6)
    expect(frame.total).toEqual(6);
  });

});
