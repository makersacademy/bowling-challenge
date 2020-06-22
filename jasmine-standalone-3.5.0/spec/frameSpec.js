describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

describe('it constructs with', function () {

  it('10 pins', function () {
    expect(frame.pins).toEqual(10);
  });

  it('2 rolls', function () {
    expect(frame.rolls).toEqual(2);
  });
});

describe('rollResult', function () {

  it('records results of each roll', function () {
    frame.rollResult(1);
    expect(frame.pins).toEqual(9);
  });

  it('raises error if user enters +10 points', function () {
    frame.rollResult(2);
    expect(frame.rollResult(11)).toBe("Error: Each Frame Consists of 10 Pins");
    expect(frame.pins).toEqual(8);
    expect(frame.rolls).toEqual(1);
  });
});

describe('records amount of rolls', function () {

  it('records only 1 roll', function () {
    frame.roll();
    expect(frame.rolls).toEqual(1);
  });

  it('has a max of 2 rolls per frame', function () {
    frame.roll();
    frame.roll();
    expect(frame.roll()).toBe("Error: Maximum 2 Rolls per Frame");
    expect(frame.rolls).toEqual(0);
  });

  it('records result of roll', function () {
    frame.rollResult(1);
    expect(frame.rolls).toEqual(1);
  });
});

describe('calculateScore', function () {

  it('calculates the score of each roll', function () {
    frame.rollResult(1);
    expect(frame.calculateScore()).toEqual(1);
  });
});
});
