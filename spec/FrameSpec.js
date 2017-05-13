'use strict';

describe('Frame', function(){
  
  var frame = new Frame();

  it('initializes with and empty array to store pins knocked down', function(){
    expect(frame.scores).toEqual([]);
  });

});