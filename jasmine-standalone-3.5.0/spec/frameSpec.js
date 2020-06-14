describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
});

it('starts with 10 pins', function () {
  expect(frame.pins).toEqual(10);
});

it('starts with 2 rolls', function () {
  expect(frame.rolls).toEqual(2);
});

describe('records roll', function () {

  it('records results of roll', function () {
    frame.rollResult(1);
    expect(frame.pins).toEqual(9);
  });

  it('raises error if user enters +10 points', function () {
    frame.rollResult(2);
    frame.roll();
    expect(frame.rollResult(11)).toBe("Error: Each Frame Consists of 10 Pins");
    expect(frame.pins).toEqual(8);
    expect(frame.rolls).toEqual(2);
  });

  it('resets the pins', function () {
    frame.rollResult(1);
    frame.reset();
    expect(frame.pins).toEqual(10);
  });

  it('records only 1 roll', function () {
    frame.roll();
    expect(frame.rolls).toEqual(1);
  });

  it('has a max of 2 rolls', function () {
    frame.roll();
    frame.roll();
    expect(frame.roll()).toBe("Error: Maximum 2 Rolls per Frame");
    expect(frame.rolls).toEqual(0);
  });


  it('resets the rolls to 2', function () {
    frame.roll();
    frame.resetRolls();
    expect(frame.rolls).toEqual(2);
  });
});
});
