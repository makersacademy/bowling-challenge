'use-strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame
  });

  it('can knock down pins', function(){
    expect(frame.bowl()).toBeLessThan(11);
  });

  it('can knock down the remaining pins', function(){
    spyOn(frame, 'pinsKnockedDown').and.returnValue(4);
    expect(frame.bowl()).toBeLessThan(5);
  });
});
