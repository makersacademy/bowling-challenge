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
    expect(frame.rollResult(11)).toBe("Error: Please enter a result from 1-10");
    expect(frame.pins).toEqual(frame.pins)
  });

  it('resets the pins', function () {
    frame.rollResult(2);
    frame.reset();
    expect(frame.pins).toEqual(10);
  });

  it('records only 1 roll', function () {
    frame.roll();
    expect(frame.rolls).toEqual(1);
  });
  });
});
