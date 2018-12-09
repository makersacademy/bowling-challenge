'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with 10 pins', function(){
    expect(frame.pins).toEqual(10);
  });

});
