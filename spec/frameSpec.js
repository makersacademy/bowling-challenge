'use-strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('can knock down pins', function(){
    expect(frame.bowl()).toBeLessThan(10);
  });

  it('can knock down the remaining pins', function(){
    spyOn(frame, 'randomPins').and.returnValue(6)
    expect(frame.bowl()).toBeLessThan(5);
  });
});
