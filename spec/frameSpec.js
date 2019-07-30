describe('Frame', function () {
  beforeEach(function () {
    frame = new Frame();
  });

  it('has 10 pins at the start', function () {
    expect(frame.pinsLeft()).toEqual(10);
  });

  it('has a maximum of 2 rolls per frame', function () {
    frame.bowl(5);
    frame.bowl(5);
    expect(function(){frame.bowl(5);}).toThrowError('You only get two rolls!');
  });

  it('player can bowl', function () {
    expect(frame.bowl(3)).toEqual(frame.firstBowl);
  });

  it('player can roll twice if first roll is not a strike', function () {
    frame.bowl(5);
    expect(frame.bowl(5)).toEqual(frame.secondBowl);
  });

  it('if first roll is a strike, frame ends', function () {
    frame.bowl(10);
    expect(frame.pinsLeft()).toEqual(0);
  });

  it('can check if roll is a strike', function () {
    frame.bowl(10);
    expect(frame.isStrike()).toEqual(true);
  })

  it('can check if roll is a spare', function () {
    frame.bowl(9);
    frame.bowl(1);
    expect(frame.isSpare()).toEqual(true);
  })

  it('can only knock down 10 pins', function () {
    expect(function(){frame.bowl(11);}).toThrowError('Error! There are only 10 pin(s).');
  })

  it('can only knock down 10 pins in total', function () {
    frame.bowl(5);
    expect(function(){frame.bowl(6);}).toThrowError('Error! There are only 5 pin(s) left.');
  });

  it('bonus points can be added',function () {
    frame.addBonusPoints(10);
    expect(frame.bonusPoints()).toEqual(10);
  });

  describe('can check if frame is finished',function () {
    it('when you bowl a strike',function () {
      frame.bowl(10);
      expect(frame.isFinished()).toEqual(true);
    });

    it('when you bowl a spare',function () {
      frame.bowl(5);
      expect(frame.isFinished()).toEqual(false);
      frame.bowl(5)
      expect(frame.isFinished()).toEqual(true);
    });

    it('when you bowl a normal frame',function () {
      frame.bowl(1);
      expect(frame.isFinished()).toEqual(false);
      frame.bowl(2);
      expect(frame.isFinished()).toEqual(true);
    });
  });

  it('gets score (without bonus)', function () {
    frame.bowl(1);
    frame.bowl(2);
    expect(frame.score()).toEqual(3);
  });

  it('can add bonus points',function () {
    frame.addBonusPoints(10);
    expect(frame.bonusPoints()).toEqual(10);
  });
});
