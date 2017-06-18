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

  it('increments the score', function(){
    spyOn(frame, 'pinsKnockedDown').and.returnValue(4);
    frame.bowl();
    frame.bowl();
    expect(frame.currentScore).toEqual(8);
  });

  it('plays only two balls per frame', function(){
    frame.bowl();
    expect(frame.ball).toEqual(1)
    frame.bowl();
    expect(frame.bowl()).toEqual(0);
  });
});
