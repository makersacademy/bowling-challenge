var Frame = require('../src/frame.js');

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  
  it ("should have a frame score of 0 on initialization", function() {
    expect(frame.score()).toEqual(0)
  });

  it ("should have a score of 7 when 7 pins knocked down on first roll", function() {
    frame.inputRoll(7)
    expect(frame.score()).toEqual(7)
  });

  it ("should have a score of 9 when 7 and 2 are rolled and no more rolls should be allowed and the frame should be closed", function() {
    frame.inputRoll(7)
    frame.inputRoll(2)
    expect(frame.score()).toEqual(9)
    expect(frame.canRoll()).toEqual(false)
    expect(frame.closed()).toEqual(true)
  });

  it ("should end the frame if a strike is rolled", function() {
    frame.inputRoll(10)
    expect(frame.score()).toEqual(10)
    expect(frame.canRoll()).toEqual(false)
  });

  it ("allow for 2 extras if a strike is rolled", function() {
    frame.inputRoll(10)
    expect(frame.numExtras()).toEqual(2)
  });

  it ("should show extras required is 1 and update the score 1 roll after a strike", function() {
    frame.inputRoll(10)
    frame.inputExtra(7)
    expect(frame.score()).toEqual(17)
    expect(frame.numExtras()).toEqual(1)
  });

  it ("should show extras required is 0 and update the score 2 rolls after a strike", function() {
    frame.inputRoll(10)
    frame.inputExtra(7)
    frame.inputExtra(2)
    expect(frame.score()).toEqual(19)
    expect(frame.numExtras()).toEqual(0)
  });

  it ("should close the frame once no rolls or no extras are required after a strike", function() {
    frame.inputRoll(10)
    frame.inputExtra(7)
    frame.inputExtra(2)
    expect(frame.closed()).toEqual(true)
  });


  it ("allow for 1 extras if a spare is rolled", function() {
    frame.inputRoll(7)
    frame.inputRoll(3)
    expect(frame.numExtras()).toEqual(1)
  });

  it ("should show extras required is 0 and update the score 1 rolls after a spare", function() {
    frame.inputRoll(7)
    frame.inputRoll(3)
    frame.inputExtra(7)
    expect(frame.score()).toEqual(17)
  });

  it ("should close the frame once no rolls or no extras are required after a spare", function() {
    frame.inputRoll(7)
    frame.inputRoll(3)
    frame.inputExtra(7)
    expect(frame.closed()).toEqual(true)
  });
});
