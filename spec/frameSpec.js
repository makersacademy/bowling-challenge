'use-strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('can knock down pins', function(){
    expect(frame.bowl()).toEqual(10);
  });
});
